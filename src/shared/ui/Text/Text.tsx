/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { memo, type FC, type ReactNode } from 'react';
import { type Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
    INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size-s',
    M = 'size-m',
}

export enum TextTag {
    'P' = 'P',
    'SPAN' = 'SPAN',
}

export enum TitleTag {
    'H1' = 'H1',
    'H2' = 'H2',
    'H3' = 'H3',
    'H4' = 'H4',
    'H5' = 'H5',
    'H6' = 'H6',
}

interface TextProperties {
    tag: TextTag;
    content: string;
    className?: string;
}

interface TitleProperties {
    tag: TitleTag;
    content: string;
    className?: string;
}

interface TextProps {
    className?: string;
    title?: TitleProperties;
    text?: TextProperties[];
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;

    'data-testid'?: string;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.S,
        'data-testid': dataTestId = 'Text',
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const getTitle = (title: TitleProperties): ReactNode => {
        switch (title.tag) {
            case TitleTag.H2:
                return (
                    <h2
                        data-testid={`${dataTestId}.Header`}
                        className={
                            title.className ? title.className : cls.title
                        }
                    >
                        {title.content}
                    </h2>
                );
            case TitleTag.H3:
                return (
                    <h3
                        data-testid={`${dataTestId}.Header`}
                        className={
                            title.className ? title.className : cls.title
                        }
                    >
                        {title.content}
                    </h3>
                );
            case TitleTag.H4:
                return (
                    <h4
                        data-testid={`${dataTestId}.Header`}
                        className={
                            title.className ? title.className : cls.title
                        }
                    >
                        {title.content}
                    </h4>
                );
            case TitleTag.H5:
                return (
                    <h5
                        data-testid={`${dataTestId}.Header`}
                        className={
                            title.className ? title.className : cls.title
                        }
                    >
                        {title.content}
                    </h5>
                );
            case TitleTag.H6:
                return (
                    <h6
                        data-testid={`${dataTestId}.Header`}
                        className={
                            title.className ? title.className : cls.title
                        }
                    >
                        {title.content}
                    </h6>
                );
            case TitleTag.H1:
            default:
                return (
                    <h1
                        data-testid={`${dataTestId}.Header`}
                        className={
                            title.className ? title.className : cls.title
                        }
                    >
                        {title.content}
                    </h1>
                );
        }
    };

    const getText = (text: TextProperties, key: any = null): ReactNode => {
        switch (text.tag) {
            case TextTag.SPAN:
                return (
                    <span
                        data-testid={`${dataTestId}.Paragraph`}
                        className={text.className ? text.className : cls.text}
                        key={key ?? null}
                    >
                        {text.content}
                    </span>
                );
            case TextTag.P:
            default:
                return (
                    <p
                        data-testid={`${dataTestId}.Paragraph`}
                        className={text.className ? text.className : cls.text}
                        key={key ?? null}
                    >
                        {text.content}
                    </p>
                );
        }
    };

    return (
        <div className={classNames(cls['text-wrapper'], mods, [className])}>
            {title && getTitle(title)}
            {text?.map((paragraph) => getText(paragraph, paragraph.content))}
        </div>
    );
});
