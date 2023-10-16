import { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/widgets/LangSwitcher';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({className}: PageErrorProps) => {
    const { t } = useTranslation('error');

    const reloadPage: VoidFunction = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls['page-error'], {}, [className])}>
            <h1 className={cls.title}>{t('Что-то пошло не так')}</h1>
            <p className={cls.text}>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={ reloadPage }>
                {t('Обновить страницу')}
            </Button>
            <LangSwitcher className={cls.lang} />
        </div>
    );
};