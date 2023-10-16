/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { StateSchema } from "@/app/providers/StoreProvider";
import type { ScrollSchema } from "../types/scrollPageSchema";
import { createSelector } from "@reduxjs/toolkit";

export const getScrollPosition  = (state: StateSchema): ScrollSchema => state.scrollPage?.scroll || {};
export const getScrollPositionByPath = createSelector(
    getScrollPosition,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)