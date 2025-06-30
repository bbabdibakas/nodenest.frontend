import axios from 'axios';

export const api = axios.create({
    baseURL: __API__,
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
    }
})