import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://147.182.171.17:5001/',
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('accessToken'));
        // console.log(token)
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        headers.set('Content-Type', 'application/json');
        return headers;
    },
});

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['overview'],
    endpoints: () => ({})
});