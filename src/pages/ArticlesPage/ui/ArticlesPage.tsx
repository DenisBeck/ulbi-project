import { memo, type FC, useCallback } from 'react'
import cls from './ArticlesPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { AnyAction } from '@reduxjs/toolkit';
import { Page } from 'widgets/Page';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = ({className}: ArticlesPageProps) => {
    
    const dispatch = useAppDispatch();
    
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage() as unknown as AnyAction)
        
    }, [dispatch])


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart}>
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.articles} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);