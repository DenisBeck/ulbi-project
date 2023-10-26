import { type StateSchema } from '@/app/providers/StoreProvider';

export const getRecommendationsIsLoading = (
    state: StateSchema,
): boolean | undefined => state.articleDetailsPage?.recommendations.isLoading;
export const getRecommendationsError = (
    state: StateSchema,
): string | undefined => state.articleDetailsPage?.recommendations.error;
