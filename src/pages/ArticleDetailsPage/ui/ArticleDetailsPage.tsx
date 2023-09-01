import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({className}: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls['article-details'], {}, [className])}>
            {t('Детали статьи').toUpperCase()}
        </div>
    );
};

export default memo(ArticleDetailsPage)