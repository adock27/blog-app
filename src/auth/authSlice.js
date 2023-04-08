import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        logIn: (state, action) => {
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

export const { logIn, logOut } = authSlice.actions

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentUserToken = (state) => state.auth.token

export default authSlice.reducer;