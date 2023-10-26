/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import type { Article } from '@/entities/Article';
import type { StateSchema } from '@/app/providers/StoreProvider';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
});

export const getRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>((state) => {
        return (
            state.articleDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState()
        );
    });

const initialState: ArticleDetailsRecommendationsSchema =
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    );

export const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsRecommendationsActions } =
    articleDetailsRecommendationsSlice;
export const { reducer: articleDetailsRecommendationsReducer } =
    articleDetailsRecommendationsSlice;
