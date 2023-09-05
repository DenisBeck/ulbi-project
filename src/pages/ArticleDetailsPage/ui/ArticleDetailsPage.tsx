/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({className}: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>(); 

    return (
        <div className={classNames(cls['article-details'], {}, [className])}>
            {id ? <ArticleDetails id={id} /> : t('Статья не найдена')}
        </div>
    );
};

export default memo(ArticleDetailsPage)