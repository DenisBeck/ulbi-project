/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type FC, Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import cls from './ListBox.module.scss'
import popupCls from '../../styles/popup.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '../../../Button/Button'
import { HStack } from '../../../Stack'
import type { DropdownDirection } from '../../../../types'

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    selectedValue?: string;
    defaultValue?: string;
    readonly?: boolean;
    onChange?: <T extends string>(value: T) => void;
    direction?: DropdownDirection;
    label?: string;
}




export const ListBox: FC<ListBoxProps> = (props: ListBoxProps) => {
    const {
        className,
        items,
        selectedValue,
        defaultValue,
        readonly,
        onChange,
        direction = 'bottom right',
        label
    } = props;

    const optionsClasses = [popupCls[direction.split(' ')[0]], popupCls[direction.split(' ')[1]]]

    return (
        <HStack gap={'8'}>
            {label && <span className={cls.label}>{`${label}`}</span>}
            <HListBox 
                disabled= {readonly}
                value={selectedValue} 
                onChange={onChange}
                as={'div'}
                className={classNames(cls.listbox, {[cls.readonly]: readonly}, [className])}
            >
                <HListBox.Button as={'div'} className={popupCls.trigger}>
                    <Button>
                        {selectedValue ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.items, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(
                                    cls.item, 
                                    {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    }
                                )}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox> 
        </HStack>
    )
}