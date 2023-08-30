// import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('fetchProfileData.test', () => {
    const data = {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
    }
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected');        
    });
});