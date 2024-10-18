import { createSlice } from '@reduxjs/toolkit'
import { supabase } from '../../supabase/client';

const initialState = {
    isLoggedIn: false,
    userEmail: null,
    userName: null,
    userId: null,

}

export const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            const { userId, name, email } = action.payload
            state.isLoggedIn = 'true'
            state.userId = userId
            state.userName = name
            state.userEmail = email
        },

        removeActiveUser: (state, action) => {
            state.isLoggedIn = 'false'
            state.id = null
            state.name = null
            state.email = null
        }
    }
});

export const { setActiveUser, removeActiveUser } = authSlice.actions

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectIsEmail = (state) => state.auth.userEmail
export const selectUserID = (state) => state.auth.userId
export const selectUseName = (state) => state.auth.userName

export default authSlice.reducer