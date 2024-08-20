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
        allUsers: builder.query({
            query: ({ page = 1, limit = 10 }) => ({
                url: `dashboard/all-users?page=${page}&limit=${limit}`,
                method: "GET"
            }),
            providesTags: ['allUsers']
        }),
        subscriptionPlan: builder.query({
            query: () => ({
                url: 'subscription-plan/all-plans',
                method: "GET"
            }),
            providesTags: ['subscriptionPlan']
        }),
        updateSubscriptionPlan: builder.mutation({
            query: ({ id, data }) => ({
                url: `subscription-plan/edit-plans/${id}`,
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['subscriptionPlan']
        }),
        ReportEmotions: builder.query({
            query: () => ({
                url: 'feelings/emotions-overview',
                method: "GET"
            }),
            providesTags: ['reportEmotion']
        }),
        allUserReport: builder.query({
            query: () => ({
                url: 'feelings/user-report',
                method: "GET"
            }),
            providesTags: ["allUserReport"]
        })
    })
})

export const { useOverViewQuery, useEarningAnalyticsQuery, useAllUsersQuery, useSubscriptionPlanQuery, useReportEmotionsQuery, useUpdateSubscriptionPlanMutation, useAllUserReportQuery } = dashboardApi;