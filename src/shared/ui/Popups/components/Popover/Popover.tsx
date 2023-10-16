import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import type { DropdownDirection } from '../../../../types';
import type { FC, ReactNode } from 'react';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export const Popover: FC<PopoverProps> = (props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottom right', children,
    } = props;

    const menuClasses = [popupCls[direction.split(' ')[0]], popupCls[direction.split(' ')[1]]];

    return (
        <HPopover
            className={classNames(cls.popover, {}, [className, popupCls.popup])}
        >
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
