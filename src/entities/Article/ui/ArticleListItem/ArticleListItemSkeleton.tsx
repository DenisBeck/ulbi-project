/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/consts/article';
// import { Button, ButtonTheme } from 'shared/ui/Button/Button';
// import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Card } from '@/shared/ui/Card/Card';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo((props:ArticleListItemSkeletonProps) => {
    const {
        className,
        view
    } = props;
    
    if(view === ArticleView.LINES) {
        return (
            <Card 
                className={classNames(
                    cls['article-list-item'], 
                    {}, 
                    [className, cls[view.toLowerCase()], cls['article-card']]
                )}>
                <div className={cls.header}>
                    <div className={cls.user}>
                        <Skeleton height={30} width={30} border={'50%'} />
                        <Skeleton width={150} height={16} className={cls.username} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.date} />
                </div>
                <Skeleton width={250} height={24} className={cls['text-wrapper']} />
                <Skeleton height={200} className={cls.img} />
                <div className={cls.footer}>
                    <Skeleton height={36} width={200} />
                </div>
            </Card>
        );
    }

    return (
        <Card 
            className={classNames(
                cls['article-list-item'], 
                {}, 
                [className, cls[view.toLowerCase()], cls['article-card']]
            )}>
            <div className={cls['image-wrapper']}>
                <Skeleton width={200} height={200} className={cls.img} />
            </div>
            <div className={cls.info}>
                <Skeleton width={130} height={16} />
            </div>
            <Skeleton width={150} height={16} className={cls.title} />
        </Card>
    );
});