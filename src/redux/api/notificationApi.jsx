import { baseApi } from "./baseApi"

const notificationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendNotification: builder.mutation({
            query: (data) => ({
                url: 'notification/send',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }),
            invalidatesTags: ['notification']
        })
    })
})


export const {useSendNotificationMutation} = notificationApi


