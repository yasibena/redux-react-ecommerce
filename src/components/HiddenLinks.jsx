import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../Redux/feature/authSlice'

export default function NotShowOnLogin({ children }) {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if (isLoggedIn) {
        return children;
    }
    return null;
}
