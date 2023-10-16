import { classNames, type Mods } from '@/shared/lib/classNames/classNames';
import type { FC, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: cls['justify-start'],
    center: cls['justify-center'],
    end: cls['justify-end'],
    between: cls['justify-between'],
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls['align-start'],
    center: cls['align-center'],
    end: cls['align-end'],
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls['direction-row'],
    column: cls['direction-column'],
};

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface FlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex: FC<FlexProps> = (props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        gap,
        max,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div className={classNames(cls.flex, mods, classes)}>
            {children}
        </div>
    );
};
