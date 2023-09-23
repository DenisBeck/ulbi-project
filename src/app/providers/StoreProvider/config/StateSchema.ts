import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { ArticleDetailsSchema } from "entities/Article";
import type { ProfileSchema } from "entities/Profile";
import type { UserSchema } from "entities/User/";
import type { AddCommentFormSchema } from "features/AddCommentForm";
import type { LoginSchema } from "features/AuthByUsername";
import type { ArticleDetailsCommentsSchema } from "pages/ArticleDetailsPage";
import type { ArticlesPageSchema } from "pages/ArticlesPage";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
    user: UserSchema

    // асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;

    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg,
    state: StateSchema,
}