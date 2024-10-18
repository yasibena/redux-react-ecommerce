import { configureStore } from "@reduxjs/toolkit";
import productReducer from './feature/ProductSlice'
// import { productsApi } from "./feature/ProductSlice";
import modalReducer from "./feature/modalSlice";
import { apiSlice } from "../Redux/feature/apiSlice";
import cartSlice from "./feature/cartSlice";
import authReducer from './feature/authSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    modal: modalReducer,
    auth: authReducer,
    cart: cartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefualtMiddleWare) =>

    getDefualtMiddleWare().concat(apiSlice.middleware)
})

