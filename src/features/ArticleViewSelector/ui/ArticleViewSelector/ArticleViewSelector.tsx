/* eslint-disable react/display-name */
import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'

import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BRICKS,
        icon: TiledIcon,
    },
    {
        view: ArticleView.LINES,
        icon: ListIcon
    }
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }
    
    return (
        <div className={classNames(cls['article-view-selector'], {}, [className])}>
            {viewTypes.map(viewType => (
                <Button 
                    key={viewType.view} 
                    theme={ButtonTheme.CLEAR} 
                    onClick={onClick(viewType.view)}
                >
                    <Icon Svg={viewType.icon} className={classNames('', {[cls['not-selected']]: viewType.view !== view})} />
                </Button>
            ))}
        </div>
    );
});