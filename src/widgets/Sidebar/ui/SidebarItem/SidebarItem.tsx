/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import type { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if(item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink 
            theme={ AppLinkTheme.SECONDARY } 
            to={ item.path } 
            className={ classNames(cls.link, { [cls.collapsed]: collapsed }) } 
        >
            <item.Icon className={cls.icon} /><span>{t(item.text)}</span>
        </AppLink>
    );
});