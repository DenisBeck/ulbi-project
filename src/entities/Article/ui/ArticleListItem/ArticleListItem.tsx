/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { memo, type FC, type HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { type Article, type ArticleTextBlock } from '../../model/types/article';
import { Text, TextTag, TitleTag } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
// import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleView, ArticleBlockType } from '../../model/consts/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => {
        const { t } = useTranslation('article');

        const { className, article, view, target } = props;
        // const [isHover, bindHover] = useHover();
        // console.log(isHover);

        const types = (
            <Text
                className={cls.types}
                text={[
                    {
                        tag: TextTag.SPAN,
                        content: article.type.join(', '),
                        className: cls['types-text'],
                    },
                ]}
            />
        );
        const views = (
            <div className={cls.views}>
                <Text
                    text={[
                        {
                            tag: TextTag.SPAN,
                            content: String(article.views),
                            className: cls['views-count'],
                        },
                    ]}
                />
                <Icon Svg={EyeIcon} className={cls.icon} />
            </div>
        );

        if (view === ArticleView.LINES) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;
            return (
                <Card
                    // {...bindHover}
                    data-testid="ArticleListItem"
                    className={classNames(cls['article-list-item'], {}, [
                        className,
                        cls[view.toLowerCase()],
                        cls['article-card'],
                    ])}
                >
                    <div className={cls.header}>
                        <div className={cls.user}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text
                                text={[
                                    {
                                        tag: TextTag.P,
                                        content: article.user.username,
                                    },
                                ]}
                                className={cls.username}
                            />
                        </div>
                        <Text
                            text={[
                                { tag: TextTag.P, content: article.createdAt },
                            ]}
                            className={cls.date}
                        />
                    </div>
                    <Text
                        className={cls['text-wrapper']}
                        title={{
                            tag: TitleTag.H2,
                            content: article.title,
                            className: cls.title,
                        }}
                    />
                    {types}
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            className={cls['text-block']}
                            block={textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее')}...
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            );
        }

        return (
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Card
                    // {...bindHover}
                    data-testid="ArticleListItem"
                    className={classNames(cls['article-list-item'], {}, [
                        className,
                        cls[view.toLowerCase()],
                        cls['article-card'],
                    ])}
                >
                    <div className={cls['image-wrapper']}>
                        <AppImage
                            fallback={<Skeleton width={250} height={250} />}
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                        />
                        <Text
                            className={cls.date}
                            text={[
                                {
                                    tag: TextTag.SPAN,
                                    content: article.createdAt,
                                },
                            ]}
                        />
                    </div>
                    <div className={cls.info}>
                        {types}
                        {views}
                    </div>
                    <Text
                        text={[
                            {
                                tag: TextTag.P,
                                content: article.title,
                                className: cls.title,
                            },
                        ]}
                    />
                </Card>
            </AppLink>
        );
    },
);
