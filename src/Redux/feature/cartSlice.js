import { createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../supabase/client';

const initialState = {
    cartItems: [],
    totalAmount: 0,

    totalQuantity: 0,
    summary: {
        totalAmountAll: 0,
        totalQuantityAll: 0,
    },
    loading: false,
    errorMessage: ''
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {

            const newItem = action.payload;
            addItemToSupabase(newItem);

            const existingItem = state.cartItems.find(item =>
                item.id === newItem.each.id &&
                item.color === newItem.selectedColor &&
                item.size === newItem.selectedSize
            );

            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.each.id,
                    name: newItem.each.name,
                    img: newItem.each.img,
                    price: newItem.each.price,
                    quantity: 1,
                    color: newItem.selectedColor,
                    size: newItem.selectedSize,
                    totalPrice: newItem.each.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += Number(newItem.each.price);
            }

            // Calculate totals
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.totalPrice), 0);
            state.summary.totalAmountAll = state.totalAmount; // This may need to be adjusted based on what you want it to represent
            state.summary.totalQuantityAll = state.cartItems.reduce((total, item) => total + item.quantity, 0);
        },


        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                deleteItemFromSupabase(existingItem);
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.totalPrice), 0);
                state.summary.totalAmountAll = state.totalAmount;
                state.summary.totalQuantityAll = state.cartItems.reduce((total, item) => total + item.quantity, 0);
            }
        },

    },
});

const addItemToSupabase = async (newItem) => {
    try {
        const { data: existingCart, error } = await supabase
            .from('profiles')
            .select('card')
            .eq('id', newItem.userId)
            .single();

        if (error) throw error;

        const existingCartItems = existingCart?.card || [];
        const existingItem = existingCartItems.find(item =>
            item.id === newItem.each.id &&
            item.color === newItem.selectedColor &&
            item.size === newItem.selectedSize
        );

        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice += Number(newItem.each.price);
        } else {
            existingCartItems.push({
                id: newItem.each.id,
                name: newItem.each.name,
                img: newItem.each.img,
                price: newItem.each.price,
                quantity: 1,
                color: newItem.selectedColor,
                size: newItem.selectedSize,
                totalPrice: newItem.each.price,
            });
        }

        const { data: updatedCart, error: updateError } = await supabase
            .from('profiles')
            .update({ card: existingCartItems })
            .eq('id', newItem.userId);

        if (updateError) throw updateError;

        console.log('Cart updated in Supabase:', updatedCart);
    } catch (error) {
        console.error('Error updating cart in Supabase:', error);
    }
};

const deleteItemFromSupabase = async (item) => {
    try {
        const { data: existingCart, error } = await supabase
            .from('profiles')
            .select('card')
            .eq('id', item.userId)
            .single();

        if (error) throw error;

        const existingCartItems = existingCart?.card || [];
        const updatedCartItems = existingCartItems.filter(cartItem => cartItem.id !== item.id);

        const { data: updatedCart, error: updateError } = await supabase
            .from('profiles')
            .update({ card: updatedCartItems })
            .eq('id', item.userId);

        if (updateError) throw updateError;

        console.log('Cart updated in Supabase:', updatedCart);
    } catch (error) {
        console.error('Error updating cart in Supabase:', error);
    }
};

export const selectAllCartItems = state => state.cart.cartItems;
export const selectTotalAmount = state => state.cart.totalAmount;
export const selectTotalQuantity = state => state.cart.totalQuantity;
export const selectTotalAmountAll = state => state.cart.summary.totalAmountAll;
export const selectTotalQuantityAll = state => state.cart.summary.totalQuantityAll;

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
