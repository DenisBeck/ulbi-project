import type { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadonly } from "./getProfileReadonly";

describe('getProfileReadonly.test', () => {
    test('should return readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});