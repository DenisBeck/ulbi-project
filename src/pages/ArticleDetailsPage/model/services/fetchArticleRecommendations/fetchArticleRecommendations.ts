/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { Article } from '@/entities/Article';
import i18n from '@/shared/config/i18n/i18n';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
>(
    'articleDetailsPage/fetchArticlesList',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _limit: 4,
                },
            });

            if (!response.data) {
                throw new Error(i18n.t('Ошибка ввода данных'));
            }

            // // eslint-disable-next-line no-unreachable
            return response.data;
        } catch (e: any) {
            // return rejectWithValue(e.message)
            return rejectWithValue(i18n.t('Ошибка'));
        }
    },
);
