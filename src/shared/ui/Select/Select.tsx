/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useMemo, type ChangeEvent } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: Array<SelectOption<T>>;
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
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
        onChange?.(e.target.value as T);
    }

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
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
};