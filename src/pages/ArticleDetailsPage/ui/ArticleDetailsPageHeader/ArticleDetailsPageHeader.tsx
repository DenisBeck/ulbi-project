/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import {
    getRouteArticleDetails,
    getRouteArticles,
} from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);

        const canEdit = useSelector(getCanEditArticle);

        const onEdit = useCallback(() => {
            if (!article?.id) return null;
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            navigate(`${getRouteArticleDetails(article?.id)}/edit`);
        }, [navigate, article]);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        return (
            <div
                className={classNames(cls['article-details-page-header'], {}, [
                    className,
                ])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку статей')}
                </Button>
                {canEdit && (
                    <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        );
    },
);
