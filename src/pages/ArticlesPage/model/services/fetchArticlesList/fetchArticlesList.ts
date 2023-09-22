/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ThunkConfig } from "app/providers/StoreProvider";
import type { Article } from "entities/Article";
import i18n from "shared/config/i18n/i18n";
import { getArticlesPageLimit } from "../../selectors/articlesPageSelectors";

interface fetchArticlesListProps {
    page?: number;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (props, { extra, rejectWithValue, getState}) => {
        const {page = 1 } = props;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
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