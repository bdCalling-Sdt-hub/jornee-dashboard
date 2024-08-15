import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        overView : builder.query({
            query : ()=>({
                url : 'dashboard/total-count',
                method : "GET"
            }),

            providesTags : ['overview']
        })
    })
})

export const {useOverViewQuery} = dashboardApi;