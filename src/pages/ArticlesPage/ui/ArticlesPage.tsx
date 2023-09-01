import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = ({className}: ArticlesPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.articles, {}, [className])}>
            {t('Статьи').toUpperCase()}
        </div>
    );
};

export default memo(ArticlesPage);