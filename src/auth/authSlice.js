import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accesstoken } = action.payload
            state.user = user
            state.token = accesstoken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        },
    }
})

export const {setCredentials,logOut} = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentUserToken = (state) => state.auth.token