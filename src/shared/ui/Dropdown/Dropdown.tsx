/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable i18next/no-literal-string */
import { Menu } from '@headlessui/react'
import { Fragment, type FC, type ReactNode } from 'react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import type { DropdownDirection } from 'shared/types';
import { AppLink } from '../AppLink/AppLink';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger?: ReactNode;    
    direction?: DropdownDirection
}

export const Dropdown: FC<DropdownProps> = (props: DropdownProps) => {
    const {
        className, 
        items, 
        trigger,
        direction = 'bottom right'
    } = props;

    const menuClasses = [cls[direction.split(' ')[0]], cls[direction.split(' ')[1]]]

    return (
        <Menu as={'div'} className={classNames(cls.dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map(item => {
                    const content = ({ active }: {active: boolean}) => (
                        <div onClick={item.onClick} className={classNames(cls.item, {[cls.active]: active})}>{item.content}</div>
                    )
                    if(item.href) {
                        return (
                            <Menu.Item 
                                key={item.href} 
                                to={item.href} 
                                as={AppLink} 
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item key={item.href} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}