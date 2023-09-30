/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, type ReactNode, type HTMLAttributeAnchorTarget } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize, TitleTag } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget
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
        view = ArticleView.BRICKS,
        target,
    } = props;
    const { t } = useTranslation('article')

    const renderArticle = (article: Article): ReactNode => {
        return (
            <ArticleListItem 
                className={cls.item} 
                article={article} 
                view={view} 
                key={article.id} 
                target={target}
            />
        );
    }

    if(!isLoading && !articles.length) {
        <div className={classNames(cls['article-list'], {}, [className, cls[view.toLowerCase()]])}>
            <Text 
                size={TextSize.M} 
                title={{ content: t('Статья не найдена'), tag: TitleTag.H2 }} 
            />
        </div>
    }

    return (
        <div className={classNames(cls['article-list'], {}, [className, cls[view.toLowerCase()]])}>
            {isLoading && getSkeletons(view)}
            {articles.length > 0
                ? articles.map(renderArticle)
                : null
            }
        </div>
    );
});