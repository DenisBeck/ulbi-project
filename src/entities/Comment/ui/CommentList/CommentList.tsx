import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { Comment } from '../../model/types/comment';
import { Text } from 'shared/ui/Text/Text';
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
                : <Text text={[t('Комментарии отсутствуют')]} />
            }
        </div>
    );
});