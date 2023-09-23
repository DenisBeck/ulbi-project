/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { type Article, ArticleView, ArticleBlockType, type ArticleTextBlock } from '../../model/types/article';
import { Text, TextTag, TitleTag } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
// import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article,
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const {
        className,
        article,
        view
    } = props;
    // const [isHover, bindHover] = useHover();
    const navigate = useNavigate();
    // console.log(isHover);

    const onOpenArticle = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate])

    const types = (<Text className={cls.types} text={[{
        tag: TextTag.SPAN,
        content: article.type.join(', '),
        className: cls['types-text']
    }]} />)
    const views = (<div className={cls.views}>
        <Text text={[{
            tag: TextTag.SPAN,
            content: String(article.views),
            className: cls['views-count']
        }]} />
        <Icon Svg={EyeIcon} className={cls.icon} />
    </div>)

    if(view === ArticleView.LINES) {
        const textBlock = article.blocks.find(
            block => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock;
        return (
            <Card 
                // {...bindHover} 
                className={classNames(
                    cls['article-list-item'], 
                    {}, 
                    [className, cls[view.toLowerCase()], cls['article-card']]
                )}>
                <div className={cls.header}>
                    <div className={cls.user}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={[{tag: TextTag.P, content: article.user.username}]} className={cls.username} />
                    </div>
                    <Text text={[{tag: TextTag.P, content: article.createdAt}]} className={cls.date} />
                </div>
                <Text className={cls['text-wrapper']} title={{tag: TitleTag.H2, content: article.title, className: cls.title}} />
                {types}
                <img src={article.img} className={cls.img} alt={article.title} />
                {textBlock && (
                    <ArticleTextBlockComponent className={cls['text-block']} block={textBlock} />
                )}
                <div className={cls.footer}>
                    <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                        {t('Читать далее')}...
                    </Button>
                    {views}
                </div>
            </Card>
        );
    }

    return (
        <Card 
            // {...bindHover} 
            onClick={onOpenArticle}
            className={classNames(
                cls['article-list-item'], 
                {}, 
                [className, cls[view.toLowerCase()], cls['article-card']]
            )}>
            <div className={cls['image-wrapper']}>
                <img src={article.img} className={cls.img} alt={article.title} />
                <Text className={cls.date} text={[{
                    tag: TextTag.SPAN,
                    content: article.createdAt
                }]}/>
            </div>
            <div className={cls.info}>
                {types}
                {views}
            </div>
            <Text text={[{
                tag: TextTag.P,
                content: article.title,
                className: cls.title
            }]} />
        </Card>
    );
});