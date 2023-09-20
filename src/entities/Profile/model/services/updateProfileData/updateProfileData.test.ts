// import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';

describe('updateProfileData.test', () => {
    const data = {
        id: '1',
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    }
    test('success update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk('1')
        
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected');       
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: '' },
            }
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1')

        expect(result.meta.requestStatus).toBe('rejected');       
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    });
});