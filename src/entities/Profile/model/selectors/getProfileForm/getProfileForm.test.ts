import type { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe('getProfileForm.test', () => {
    test('should return form', () => {
        const data = {
            username: 'admin',
            age: 22,
            country: Country.Ukraine,
            lastname: 'ulbi tv',
            first: 'asd',
            city: 'asf',
            currency: Currency.USD,
        }

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});