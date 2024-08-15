import { baseApi } from "./baseApi";

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        overView: builder.query({
            query: () => ({
                url: 'dashboard/total-count',
                method: "GET"
            }),

            providesTags: ['overview']
        }),
        earningAnalytics: builder.query({
            query: () => ({
                url: 'dashboard/earning-analytics',
                method: "GET"
            }),

            providesTags: ['earningAnalytics']
        }),
        allUsers :  builder.query({
            query : ()=>({
                url : 'dashboard/all-users',
                method : "GET"
            }),
            providesTags : ['allUsers']
        }),
        subscriptionPlan : builder.query({
            query : ()=>({
                url : 'subscription-plan/all-plans',
                method : "GET"
            }),
            providesTags : ['subscriptionPlan']
        }),
        ReportEmotions : builder.query({
            query : ()=>({
                url : 'feelings/emotions-overview',
                method : "GET"
            }),
            providesTags : ['reportEmotion']
        })
    })
})

export const { useOverViewQuery, useEarningAnalyticsQuery,useAllUsersQuery, useSubscriptionPlanQuery,useReportEmotionsQuery } = dashboardApi;