/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/display-name */
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';
import { Text, TitleTag } from '@/shared/ui/Text/Text';
import { VStack } from '@/shared/ui/Stack';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);
    if(isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack gap='8' className={classNames('', {}, [className])}>
            <Text title={{content: t('Рекомендуем'), tag: TitleTag.H2}} />
            <ArticleList 
                articles={articles} 
                target='_blank'
            />
        </VStack>
    );
});