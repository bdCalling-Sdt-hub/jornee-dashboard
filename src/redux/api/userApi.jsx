import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder)=>({
        getUser : builder.mutation({
            query : (body)=>({
                url : 'auth/admin/login',
                method : 'POST',
                body : body
            })
        }),
        getUserInfo : builder.query({
            query : ()=>({
                url : 'auth/admin/profile',
                method :"GET"
            })
        }),
        updateUserInfo : builder.mutation({
            query : ({id,data})=>({
                url : `auth/admin/edit-profile/${id}`,
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
        })
    })
})
export const {useGetUserMutation, useGetUserInfoQuery , useUpdateUserInfoMutation} = userApi