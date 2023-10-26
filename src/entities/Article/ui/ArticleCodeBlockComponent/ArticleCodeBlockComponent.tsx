/* eslint-disable react/display-name */
import { memo, type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { type ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> =
    memo((props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;

        return (
            <div
                className={classNames(cls['article-code-block-component'], {}, [
                    className,
                ])}
            >
                <Code text={block.code} />
            </div>
        );
    });
