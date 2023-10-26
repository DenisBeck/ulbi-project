/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
    type PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Comment } from '@/entities/Comment';
import type { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id,
});

export const getArticleComments =
    articleDetailsCommentsAdapter.getSelectors<StateSchema>((state) => {
        return (
            state.articleDetailsPage?.comments ||
            articleDetailsCommentsAdapter.getInitialState()
        );
    });

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState:
        articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    articleDetailsCommentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleDetailsCommentsActions } =
    articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;
