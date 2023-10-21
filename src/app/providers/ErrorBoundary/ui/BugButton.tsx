import { useState, type FC, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BugButton.module.scss';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// Компонент для тестирования
export const BugButton: FC<BugButtonProps> = ({className}: BugButtonProps) => {
    const [ error, setError ] = useState(false);

    const throwError: VoidFunction = () => {
        setError(true);
    }

    const { t } = useTranslation('error');

    useEffect(() => {
        if(error) {
            throw new Error();
        }
    }, [error])

    return (
        <Button onClick={ throwError } className={classNames(cls['bug-button'], {}, [className])}>
            {t('Вызвать ошибку')}
        </Button>
    );
};