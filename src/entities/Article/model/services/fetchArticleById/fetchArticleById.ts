/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import i18n from '@/shared/config/i18n/i18n';
import type { Article } from '../../types/article';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleById = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>('article/fetchArticleById', async (articleId, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) {
            throw new Error(i18n.t('Ошибка ввода данных'));
        }

        // // eslint-disable-next-line no-unreachable
        return response.data;
    } catch (e: any) {
        // return rejectWithValue(e.message)
        return rejectWithValue(i18n.t('Ошибка'));
    }
});
