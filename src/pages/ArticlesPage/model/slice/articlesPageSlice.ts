/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import type { StateSchema } from "app/providers/StoreProvider"
import { ArticleView, type Article } from "entities/Article"
import type { ArticlesPageSchema } from "../types/ArticlesPageSchema"
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage"

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.articlesPage || articlesAdapter.getInitialState()
    }
)
  
const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error:undefined,
        ids: [],
        entities: {},
        view: ArticleView.BRICKS
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice