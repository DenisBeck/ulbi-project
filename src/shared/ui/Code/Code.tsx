/* eslint-disable react/display-name */
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Icon } from '../Icon/Icon';
import { type FC, memo, useCallback } from 'react';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        void navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copy}>
                <Icon className={cls.icon} Svg={CopyIcon} />
            </Button>
            <code>{text}</code>
        </pre>
    );
});
