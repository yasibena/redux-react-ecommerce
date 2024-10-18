import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.email = action.payload.userEmail
        },
        setUserLogOutState: state => {
            state.userName = null
            state.userEmail = null
        }
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.email


export default userSlice.reducer