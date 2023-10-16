/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment';
import { Text, TextTag } from '@/shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props;
    const { t } = useTranslation('article');

    if(isLoading) {
        return <div className={classNames(cls['comment-list'], {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </div>
    }
    
    return (
        <div className={classNames(cls['comment-list'], {}, [className])}>
            {comments?.length 
                ? comments.map(comment => (
                    <CommentCard 
                        key={comment.id} 
                        className={cls.comment} 
                        comment={comment} 
                        isLoading={isLoading}
                    />
                ))
                : <Text text={[{content: t('Комментарии отсутствуют'), tag: TextTag.P}]} />
            }
        </div>
    );
});