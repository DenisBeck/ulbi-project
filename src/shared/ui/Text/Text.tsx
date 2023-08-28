/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { memo, type FC } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const { 
        className, 
        title, 
        text, 
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
    }

    return (
        <div className={classNames(cls['text-wrapper'], mods, [className])}>
            { title && <h1 className={cls.title}>{ title }</h1> }
            { text && <p className={cls.text}>{ text }</p> }
        </div>
    );
});