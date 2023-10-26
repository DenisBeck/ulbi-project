/* eslint-disable react/display-name */
import { memo, type FC, type ReactNode, type HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
    const {
        className,
        theme = CardTheme.NORMAL,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
