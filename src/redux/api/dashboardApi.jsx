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
            query: ({ page, limit, subscription }) => ({
                url: `dashboard/all-subs-users?page=${page}&limit=${limit}&subscriptionStatus=${subscription ? `${subscription}` : ""}`,
                method: "GET"
            }),
            providesTags: ['allUsers']
            // ${subscription ? `&subscription=${subscription}` : `&subscription=''`}
            // dashboard/all-users?page=${page}&limit=${limit}
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
        }),
        reportTestName: builder.query({
            query: () => ({
                url: 'test/all',
                method: "GET"
            }),
            providesTags: ["report"]
        }),
        subscriptionFreePlan: builder.query({
            query: () => ({
                url: 'subscription-plan/all-fre-plans',
                method: "GET"
            }),
            providesTags: ['subscription']
        }),
        deleteFreeUser: builder.mutation({
            query: (id) => ({
                url: `subscription-plan/delete-free-plans/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['subscription']
        }),
        createFreeUser: builder.mutation({
            query: (data) => ({
                url: 'subscription-plan/create-plan-free-user',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['subscription']
        }),
        allTest: builder.query({
            query: () => ({
                url: 'test/all',
                method: "GET"
            }),
            providesTags: ['allTest']
        }),
        testQuestion: builder.query({
            query: (id) => ({
                url: `test/questions/${id}`,
                method: "GET",
            }),
            providesTags: ['testQuestions']
        }),
        createQuestion: builder.mutation({
            query: (data) => ({
                url: 'test//create-question',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['testQuestions']
        }),

    })
})

export const { useOverViewQuery, useEarningAnalyticsQuery, useAllUsersQuery, useSubscriptionPlanQuery, useReportEmotionsQuery, useAllUserReportQuery, useReportTestNameQuery, useSubscriptionFreePlanQuery, useUpdateSubscriptionPlanMutation, useDeleteFreeUserMutation, useCreateFreeUserMutation, useAllTestQuery, useTestQuestionQuery, useCreateQuestionMutation } = dashboardApi;