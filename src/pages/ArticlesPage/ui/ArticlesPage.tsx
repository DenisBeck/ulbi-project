import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
// import { useTranslation } from 'react-i18next';
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article';
import type { Article } from 'entities/Article/model/types/article';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import type { AnyAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = ({className}: ArticlesPageProps) => {
    // const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles: Article[] = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    // const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchArticlesList() as unknown as AnyAction);
        dispatch(articlesPageActions.initState());
    })

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ArticleViewSelector view={view} onViewClick={onChangeView} />
            <ArticleList 
                className={classNames(cls.articles, {}, [className])} 
                isLoading={isLoading}
                view={view} 
                articles={articles} />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);