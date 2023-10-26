/* eslint-disable react/display-name */
import { memo, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { type ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign, TextTag } from '@/shared/ui/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block?: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
    memo((props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(
                    cls['article-image-block-component'],
                    {},
                    [className],
                )}
            >
                <img src={block?.src} alt={block?.title} className={cls.img} />
                {block?.title != null && (
                    <Text
                        text={[{ content: block.title, tag: TextTag.P }]}
                        align={TextAlign.CENTER}
                    />
                )}
            </div>
        );
    });
