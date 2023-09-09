import { PayloadAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"
import { Comment } from "entities/Comment"
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema"
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId"

  const articleDetailsCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment: Comment) => comment.id,
  })
  console.log(articleDetailsCommentsAdapter)

  export const getArticleComments = articleDetailsCommentsAdapter.getSelectors<StateSchema>(
    (state) => {
        return state.articleDetailsComments || articleDetailsCommentsAdapter.getInitialState()
    }
  )
  
  const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: articleDetailsCommentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error:undefined,
        ids: [],
        entities: {}
    }),
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder
          .addCase(fetchCommentsByArticleId.pending, (state, action) => {
              state.error = undefined;
              state.isLoading = true;
          })
          .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
              state.isLoading = false;
              articleDetailsCommentsAdapter.setAll(state, action.payload)
          })
          .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
              state.isLoading = false;
              state.error = action.payload;
          })
  },
  })

  // Action creators are generated for each case reducer function
export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice