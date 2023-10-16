import { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({className}: LoaderProps) => {
    return (
        <div className={classNames(cls["lds-ripple"], {}, [className])}>
            <div />
            <div />
        </div>
    );
};