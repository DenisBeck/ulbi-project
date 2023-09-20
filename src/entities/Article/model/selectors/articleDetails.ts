import type { StateSchema } from "app/providers/StoreProvider";
import type { Article } from "../types/article";

export const getArticleDetailsData = (state: StateSchema): Article | undefined => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema): boolean => (Boolean((state.articleDetails?.isLoading))) || false;
export const getArticleDetailsError = (state: StateSchema): string | undefined => state.articleDetails?.error;