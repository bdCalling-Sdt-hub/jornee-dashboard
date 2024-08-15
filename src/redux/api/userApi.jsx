import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getUser : builder.mutation({
            query : (body)=>({
                url : 'auth/admin/login',
                method : 'POST',
                body : body
            })
        })
    })
})
export const {useGetUserMutation} = userApi