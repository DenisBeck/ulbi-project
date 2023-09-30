/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPageHeader.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);

    const canEdit = useSelector(getCanEditArticle);

    const onEdit = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article]);


    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    return (
        <div className={classNames(cls['article-details-page-header'], {}, [className])}>
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
});