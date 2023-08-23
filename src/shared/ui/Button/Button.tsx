/* eslint-disable react/display-name */
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { type FC, type ButtonHTMLAttributes, memo } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
  OUTLINE_INVERTED = 'outline-inverted',
}

export enum ButtonSize {
    M = 'size-m',
    S = 'size-s',
    L = 'size-l'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square,
        disabled,
        size = ButtonSize.S,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    }

    return (
        <button
            type="button"
            disabled={ disabled }
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
})
