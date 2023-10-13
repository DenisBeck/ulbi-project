import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { ArticleDetailsSchema } from "entities/Article";
import type { UserSchema } from "entities/User/";
import type { AddCommentFormSchema } from "features/AddCommentForm";
import type { LoginSchema } from "features/AuthByUsername";
import type { ProfileSchema } from "features/editableProfileCard";
import type { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import type { ArticlesPageSchema } from "pages/ArticlesPage";
import type { rtkApi } from "shared/api/rtkApi";
import type { ScrollPageSchema } from "widgets/Page";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
    user: UserSchema,
    scrollPage: ScrollPageSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // асинхронные редюсеры
    loginForm?: LoginSchema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema,
    articleDetailsPage?: ArticleDetailsPageSchema
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