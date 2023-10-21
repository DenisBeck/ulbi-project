/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text, TextTag, TitleTag } from '@/shared/ui/Text';
import cls from './NotificationItem.module.scss';
import type { Notification } from '../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls['notification-item'], {}, [className])}
        >
            <Text title={{content: item.title ?? '', tag: TitleTag.H3}} text={[{content: item.description, tag: TextTag.P}]} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
