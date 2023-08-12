/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import type { StateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";
import type { DeepPartial } from "@reduxjs/toolkit";

describe('getCounterValue', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});