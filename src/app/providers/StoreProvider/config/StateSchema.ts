import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { ArticleDetailsSchema } from "entities/Article";
import type { ProfileSchema } from "entities/Profile";
import type { UserSchema } from "entities/User/";
import type { AddCommentFormSchema } from "features/AddCommentForm";
import type { LoginSchema } from "features/AuthByUsername";
import type { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import type { NavigateOptions, To } from "react-router-dom";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
    user: UserSchema

    // асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg,
    state: StateSchema,
}