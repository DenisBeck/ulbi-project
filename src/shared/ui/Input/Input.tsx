/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/display-name */
import { type InputHTMLAttributes, type FC, memo, useState, useEffect, useRef, type MutableRefObject } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [ isFocused, setIsFocused] = useState(false);
    const [ caretPosition, setCaretPosition ] = useState(0);

    useEffect(() => {
        if(autofocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autofocus])

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }

    const onBlur = (): void => {
        setIsFocused(false);
    }

    const onFocus = (): void => {
        setIsFocused(true);
    }
    
    const onSelect = (e: any): void => {
        setCaretPosition(e?.target?.selectionStart || 0)
    }

    return (
        <div className={ classNames(cls['input-wrapper'], {}, [className]) } >
            {placeholder && (<div className={ cls.placeholder }>
                { `${placeholder}>` }
            </div>)}
            <div className={cls['caret-wrapper']}>
                <input 
                    ref={ ref }
                    type={ type } 
                    value={ value }
                    onChange={ onChangeHandler }
                    className={ cls.input }
                    onFocus={ onFocus }
                    onBlur={ onBlur }
                    onSelect={ onSelect }
                    { ...otherProps }
                />
                {isFocused && (
                    <span 
                        className={cls.caret} 
                        style={{ left: `${caretPosition * 8.8}px`}}
                    />
                )}
            </div>
        </div>
    );
});