/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const { 
        className, 
        title, 
        text, 
        theme = TextTheme.PRIMARY
    } = props
    return (
        <div className={classNames(cls['text-wrapper'], {[cls[theme]]: true}, [className])}>
            { title && <h1 className={cls.title}>{ title }</h1> }
            { text && <p className={cls.text}>{ text }</p> }
        </div>
    );
});