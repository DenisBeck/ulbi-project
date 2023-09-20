/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextTag, TitleTag } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
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
            <div className={classNames(cls['comment-card'], {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width={'100%'} height={50} />
            </div>
        )
    }

    if(!comment) {
        return null;
    }
    
    return (
        <div className={classNames(cls['comment-card'], {}, [className])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                {comment.user?.avatar ? <Avatar size={30} src={comment.user?.avatar} /> : null}
                <Text title={{
                    content: comment.user?.username,
                    tag: TitleTag.H3
                }} />
            </AppLink>
            <Text text={[{
                content: comment.text,
                tag: TextTag.P
            }]} />
        </div>
    );
});