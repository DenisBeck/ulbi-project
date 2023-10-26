import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions, type User } from '@/entities/User';
import i18n from '@/shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post<User>('/login', authData);
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data),
            );
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            return rejectWithValue(
                i18n.t('Вы ввели неправильный логин или пароль'),
            );
        }
    },
);
