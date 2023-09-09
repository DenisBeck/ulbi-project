/* eslint-disable react/display-name */
import { useEffect, type FC, memo, useCallback, Fragment } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import type { AnyAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import cls from './ArticleDetails.module.scss'
import { Icon } from 'shared/ui/Icon/Icon';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({className, id}: ArticleDetailsProps) => {
    const { t } = useTranslation('error');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch(block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
        default:
            return null
        }
    }, [])

    useInitialEffect(() => {
        dispatch(fetchArticleById(id) as unknown as AnyAction)
    })

    let content;

    if(isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
            </>
        )
    } else if(error != null) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи')}
            />
        )
    } else {
        content = (
            <>
                <div className={cls['avatar-wrapper']}>
                    <Avatar 
                        size={200} 
                        src={article?.img} 
                        className={cls.avatar}
                    />
                </div>
                <Text 
                    size={TextSize.M}
                    className={cls.title}
                    title={article?.title}
                    text={[article?.subtitle as string]}
                />
                <div className={cls['articleinfo-wrapper']}>
                    <div className={cls.articleinfo}>
                        <Icon Svg={EyeIcon} className={cls.icon} />
                        <Text text={[String(article?.views)]} />
                    </div>
                    <div className={cls.articleinfo}>
                        <Icon Svg={CalendarIcon} className={cls.icon} />
                        <Text text={[article?.createdAt as string]} />
                    </div>
                </div>
                
                {article?.blocks?.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls['article-details'], {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});