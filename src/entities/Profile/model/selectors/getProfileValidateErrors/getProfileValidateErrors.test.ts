import type { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/profile";

describe('getProfileValidateErrors.test', () => {
    test('should return validation errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});