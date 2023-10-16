import { Suspense, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader/Loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose
    } = props;

    return (
        <Modal 
            className={classNames(cls['login-modal'], {}, [className])}
            isOpen={ isOpen }   
            onClose={ onClose } 
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={ onClose } />
            </Suspense>
            
        </Modal>
    );
};