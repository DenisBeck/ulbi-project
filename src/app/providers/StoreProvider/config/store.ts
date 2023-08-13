import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore(initialState?: StateSchema): ToolkitStore {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: _IS_DEV_,
        preloadedState: initialState
    })
}