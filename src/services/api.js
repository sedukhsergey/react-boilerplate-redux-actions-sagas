import apisauce from 'apisauce';

export const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL: process.env.REACT_APP_API_BASE_URL,
    // here are some default headers
    headers: {
        'Cache-Control': 'no-cache',
        // accept: 'application/json',
        'Content-Type': 'application/json',
    },
    // 15 second timeout...
    // timeout: 20000,
});

export const fetchUsersRequest = ({ results = 10 }) => api.get('', { results });
