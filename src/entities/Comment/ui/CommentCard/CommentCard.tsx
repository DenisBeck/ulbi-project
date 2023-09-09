import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
    const {
        className,
        comment,
        isLoading
    } = props;

    if(isLoading) {
        return (
            <div className={classNames(cls['comment-card'], {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width={'100%'} height={50} />
            </div>
        )
    }
    
    return (
        <div className={classNames(cls['comment-card'], {}, [className])}>
            <div className={cls.header}>
                {comment.user?.avatar ? <Avatar size={30} src={comment.user?.avatar} /> : null}
                <Text title={comment.user?.username} />
            </div>
            <Text text={[comment.text]} />
        </div>
    );
});