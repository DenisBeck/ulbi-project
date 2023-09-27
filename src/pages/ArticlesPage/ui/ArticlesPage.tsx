import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
// import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import type { Article } from 'entities/Article/model/types/article';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import type { AnyAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

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

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage() as unknown as AnyAction)
        
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams) as unknown as AnyAction);
    })

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleList 
                    className={classNames(cls.articles, {}, [className])} 
                    isLoading={isLoading}
                    view={view} 
                    articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);