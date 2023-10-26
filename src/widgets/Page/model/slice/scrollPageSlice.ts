/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ScrollPageSchema } from '../types/scrollPageSchema';

const initialState: ScrollPageSchema = {
    scroll: {},
};

export const scrollPageSlice = createSlice({
    name: 'scrollPage',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollPageActions } = scrollPageSlice;
export const { reducer: scrollPageReducer } = scrollPageSlice;
