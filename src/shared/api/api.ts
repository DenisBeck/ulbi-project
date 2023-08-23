import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const baseURL = _IS_DEV_ ? 'http://localhost:8000' : _API_;

export const $api = axios.create({
    baseURL,
    headers: {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ?? '', 
    }
})