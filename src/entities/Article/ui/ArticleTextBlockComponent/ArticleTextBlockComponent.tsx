/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { type ArticleTextBlock } from '../../model/types/article';
import { Text, TextTag, TitleTag } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo((props: ArticleTextBlockComponentProps) => {
    const { 
        className, 
        block 
    } = props
    
    return (
        <Text 
            title={{
                content: block?.title ?? '', 
                tag: TitleTag.H2
            }} 
            text={
                block.paragraphs.map(item => {
                    return {
                        tag: TextTag.P,
                        content: item
                    }})
            } 
            className={classNames(cls['article-text-block-component'], {}, [className])} />
    );
});