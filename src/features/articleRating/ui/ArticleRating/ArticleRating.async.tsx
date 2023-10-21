import { type FC, lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import type { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(
    async () => await import('./ArticleRating'),
);

export const ArticleRatingAsync: FC<ArticleRatingProps> = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    );
};
