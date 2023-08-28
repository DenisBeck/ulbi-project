/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { memo, type FC, useMemo, type ChangeEvent } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option 
                className={ cls.option }
                key={ opt.value } 
                value={ opt.value }
            >
                { opt.content }
            </option>
        ))
    }, [options])

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(cls.wrpapper, mods, [className])}>
            {label && ( 
                <span className={cls.label}>{ `${label}>` }</span>
            )}
            <select 
                disabled={ readonly }
                className={cls.select} 
                name="currency" 
                id="currency"
                value={ value }
                onChange={ onChangeHandler }
            >
                { optionsList }
            </select>
        </div>
    );
});