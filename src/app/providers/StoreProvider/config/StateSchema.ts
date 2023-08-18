import type { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { type CounterSchema } from "entities/Counter";
import { type UserSchema } from "entities/User/";
import { type LoginSchema } from "features/AuthByUsername";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema

    // асинхронные редюсеры
    loginForm?: LoginSchema
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