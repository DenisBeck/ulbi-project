/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type ReactNode, type FC, useEffect, useCallback, useState } from 'react'
import { type Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props;

    const { theme } = useTheme();
    const [ isMounted, setIsMounted ] = useState(false);

    useEffect(() => {
        if(isOpen) {
            setIsMounted(true);
        }
    }, [ isOpen ])

    const closeHandler: VoidFunction = useCallback(() => {
        if(onClose != null) {
            onClose();
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if(e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation();
    }

    useEffect(() => {
        if(isOpen === true) {
            window.addEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown]);

    const mods: Mods = {
        [cls.opened]: isOpen
    }
    if(lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};