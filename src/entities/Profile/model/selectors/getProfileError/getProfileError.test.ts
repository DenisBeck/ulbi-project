import type { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123',
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileError(state as StateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});