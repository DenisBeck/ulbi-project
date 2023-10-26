/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType, type Article } from '@/entities/Article';
import i18n from '@/shared/config/i18n/i18n';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface fetchArticlesListProps {
    replace?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchArticlesList = createAsyncThunk<
    Article[],
    fetchArticlesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async (props, { extra, rejectWithValue, getState }) => {
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
                type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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
