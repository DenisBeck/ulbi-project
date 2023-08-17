import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
import { userReducer, userActions } from "./model/slice/userSlice";
import type { UserSchema, User } from "./model/types/user";

export {
    userActions,
    userReducer,
    type User,
    type UserSchema,
    getUserAuthData,
}