/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TitleTag } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import  type{ AnyAction } from '@reduxjs/toolkit';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import { getRecommendations } from '../model/slice/articleDetailsPageRecommendationsSlice';
import { getRecommendationsIsLoading } from '../model/selectors/recommendations';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../model/slice';
import { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({className}: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>(); 
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getRecommendations.selectAll);
    const navigate = useNavigate();
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const commentsError = useSelector(getArticleCommentsError);
    const recommendationsIsLoading = useSelector(getRecommendationsIsLoading)

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text) as unknown as AnyAction)
    }, [dispatch])

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id) as unknown as AnyAction);
        dispatch(fetchArticleRecommendations() as unknown as AnyAction)
    })

    if (!id) {
        return (
            <Page className={classNames(cls['article-details'], {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls['article-details'], {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку статей')}
                </Button>
                <ArticleDetails id={id} className={cls['article-content']} />
                <section className={cls.recommendations}>
                    <Text className={cls['recommendations-text']} title={{content: t('Рекомендуем'), tag: TitleTag.H2}} />
                    <ArticleList 
                        className={cls['recommendations-list']} 
                        articles={recommendations} 
                        isLoading={recommendationsIsLoading} 
                        target='_blank'
                    />
                </section>
                <section className={cls.comments}>
                    <Text className={cls['comment-text']} title={{content: t('Комментарии'), tag: TitleTag.H2}} />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        isLoading={commentsIsLoading}
                        comments={comments}
                    />
                </section>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage)