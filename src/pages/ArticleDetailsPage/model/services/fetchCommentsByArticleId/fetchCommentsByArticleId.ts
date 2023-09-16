/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import { type Comment } from "entities/Comment";
import i18n from "shared/config/i18n/i18n";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, { extra, rejectWithValue}) => {
        if(!articleId) {
            return rejectWithValue('error');
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                }
            });

            if(!response.data) {
                throw new Error(i18n.t('Ошибка ввода данных'));
            }
            
            // // eslint-disable-next-line no-unreachable
            return response.data
        } catch(e: any) {
            // return rejectWithValue(e.message)
            return rejectWithValue(i18n.t('Ошибка'));
        }
        
    }
)