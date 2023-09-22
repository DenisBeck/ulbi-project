/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode => {
    return new Array(view === ArticleView.BRICKS ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} />
        ))
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.BRICKS
    } = props;

    if(isLoading) {
        return (
            <div className={classNames(cls['article-list'], {}, [className, cls[view.toLowerCase()]])}>
                
            </div>)
    }

    const renderArticle = (article: Article): ReactNode => {
        return (
            <ArticleListItem article={article} view={view} key={article.id} />
        );
    }

    return (
        <section className={classNames(cls['article-list'], {}, [className, cls[view.toLowerCase()]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
            {isLoading && getSkeletons(view)}
        </section>
    );
});