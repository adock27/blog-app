import { createApi, fetchbaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from './authSlice'

const baseQuery = fetchbaseQuery({
    baseUrl: 'http://localhost:3001',
    credetials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWhithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 403) {
        console.log('sending refres token')
//send the new refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log(refreshResult)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // store the new token 
            api.dispatch(setCredentials({
                ...refreshResult.data, user
            }))

            // retry the original query
            result = await baseQuery(args,api,extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return  result
} 

export const apiSlice = createApi({
    baseQuery: baseQueryWhithReAuth,
    endpoints: builder => ({
        
    })
})