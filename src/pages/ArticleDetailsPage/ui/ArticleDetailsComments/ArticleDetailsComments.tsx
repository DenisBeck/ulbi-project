/* eslint-disable react/display-name */
import type { AnyAction } from '@reduxjs/toolkit';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { memo, type FC, useCallback, Suspense } from 'react'
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { t } from 'i18next';
import { Text, TitleTag } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const commentsError = useSelector(getArticleCommentsError);
    

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text) as unknown as AnyAction)
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id) as unknown as AnyAction);
    })

    return (
        <section className={classNames('', {}, [className])}>
            <Text title={{content: t('Комментарии'), tag: TitleTag.H2}} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </section>
    );
});