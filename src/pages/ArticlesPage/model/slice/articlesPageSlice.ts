/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import type { StateSchema } from "app/providers/StoreProvider"
import { ArticleView, type Article, ArticleSortField, ArticleType } from "entities/Article"
import type { ArticlesPageSchema } from "../types/ArticlesPageSchema"
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage"
import type { SortOrder } from "shared/types"

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
        view: ArticleView.BRICKS,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: ArticleSortField.CREATED,
        order: 'asc',
        search: '',
        type: ArticleType.ALL
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        }
        ,setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.LINES ? 2 : 9;
            state._inited = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if(action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore= action.payload.length >= state.limit;

                if(action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload)
                } else {
                    articlesAdapter.addMany(state, action.payload)
                }
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