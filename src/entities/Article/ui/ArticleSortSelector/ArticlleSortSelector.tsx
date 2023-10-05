/* eslint-disable react/display-name */
import { memo, type FC, useMemo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { useTranslation } from 'react-i18next';
import { Select, type SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/types/article';
import type { SortOrder } from 'shared/types';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort
    } = props;
    const { t } = useTranslation('article');

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
        {
            value: 'asc',
            content: t('По возрастанию')
        },
        {
            value: 'desc',
            content: t('По убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t])
    
    return (
        <div className={classNames(cls['article-sort-selector'], {}, [className])}>
            <Select 
                options={sortFieldOptions} 
                label={t('Сортировать по')} 
                value={sort}
                onChange={onChangeSort}
            />
            <Select 
                options={orderOptions} 
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});