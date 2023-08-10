import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const { t } = useTranslation();

    const onToggle: VoidFunction = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button 
                data-testid="sidebar-toggle" 
                onClick={ onToggle }
                className={cls['collapse-btn']}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.M}
            >{
                    collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.link} ><MainIcon className={cls.icon} /><span>{t('Главная')}</span></AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.link} ><AboutIcon className={cls.icon} /><span>{t('О сайте')}</span></AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
}
