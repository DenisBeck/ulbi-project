import type { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "./getProfileIsLoading";

describe('getProfileIsLoading.test', () => {
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});