/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
    useState,
    useRef,
    type MutableRefObject,
    useEffect,
    useCallback,
} from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
    animationDelay: number;
}

export const useModal = (props: UseModalProps) => {
    const { onClose, isOpen, animationDelay } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close: VoidFunction = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [onClose, animationDelay]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        isMounted,
        close,
    };
};
