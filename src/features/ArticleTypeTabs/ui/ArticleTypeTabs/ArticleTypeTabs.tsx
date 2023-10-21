/* eslint-disable react/display-name */
import { memo, type FC, useMemo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleType } from '@/entities/Article';
import { Tabs, type TabItem } from '@/shared/ui/Tabs';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType
    } = props
    const { t } = useTranslation('article');
    
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи')
        },
        {
            value: ArticleType.IT,
            content: 'IT'
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика')
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука')
        },
    ], [t])

    
    const onTabClick = useCallback((tab: TabItem) =>{
        onChangeType(tab.value as ArticleType)
    }, [onChangeType])
    
    return (
        <Tabs 
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
});
