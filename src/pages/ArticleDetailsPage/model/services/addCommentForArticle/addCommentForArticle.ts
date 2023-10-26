/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import type { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, { dispatch, extra, rejectWithValue, getState }) => {
        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        try {
            if (!userData || !text || !article) {
                throw new Error('Нет данных');
            }

            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) {
                throw new Error('Вы ввели неправильный логин или пароль');
            }

            // dispatch(addCommentFormActions.setText(''));
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            return rejectWithValue(i18n.t(e as string));
        }
    },
);
