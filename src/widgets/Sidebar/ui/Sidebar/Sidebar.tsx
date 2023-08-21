/* eslint-disable react/display-name */
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { type FC, useState, memo } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItemsList } from '../../model/items'
import { SidebarItem } from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

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
                {
                    SidebarItemsList.map(item => (
                        <SidebarItem 
                            item={ item } 
                            collapsed={ collapsed } 
                            key={ item.path }
                        />
                    ))
                }
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    )
})
