/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage'

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: _API_,
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '';
            if(token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({}),
})