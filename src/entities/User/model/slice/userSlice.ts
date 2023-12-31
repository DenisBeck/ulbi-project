/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/lib/features';
import { action } from '@storybook/addon-actions/*';

const initialState: UserSchema = {
    _init: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                const json = JSON.parse(user) as User;
                state.authData = json;
                setFeatureFlags(json.features)
            }
            state._init = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
