import { type CounterSchema } from "entities/Counter";
import { type UserSchema } from "entities/User/";
import { type LoginSchema } from "features/AuthByUsername";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginSchema
}
