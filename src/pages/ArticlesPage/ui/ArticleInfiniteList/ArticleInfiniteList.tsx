/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import type { AnyAction } from '@reduxjs/toolkit';
import { type Article, ArticleList } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { getArticles } from '../../model/slice/articlesPageSlice';
import { memo, type FC } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { Text, TextTag } from 'shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(({className}: ArticleInfiniteListProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles: Article[] = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    const [searchParams] = useSearchParams();
    
    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams) as unknown as AnyAction);
    })

    if(error) {
        return <Text text={[{content: t('Произошла ошибка при загрузке статей'), tag: TextTag.P}]} />
    }
    
    return (
        <section>
            <ArticleList 
                className={classNames('', {}, [className])} 
                isLoading={isLoading}
                view={view} 
                articles={articles} 
            />
        </section>
    );
});
