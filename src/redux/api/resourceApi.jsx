import { baseApi } from "./baseApi";

const resourceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        resourceTestName: builder.query({
            query: () => ({
                url: 'test/static',
                method: "GET"
            }),
            providesTags: ["resourceTestName"]
        }),
        uploadPdf: builder.mutation({
            query: (formData) => {
                return ({
                    url: 'resource/add',
                    method: "POST",
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`
                    }
                })
            }
        })
    })
})

export const { useResourceTestNameQuery, useUploadPdfMutation } = resourceApi

