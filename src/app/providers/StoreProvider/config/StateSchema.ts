// export interface CounterState {
//     value: number;
// }

import { type CounterSchema } from "entities/Counter";
import { type UserSchema } from "entities/User/";


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
}
