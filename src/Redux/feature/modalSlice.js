import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSearchOpen: false,
    isWalletOpen: false,
    isFavoriteOpen: false,
    isShowMenu: false,
    isCardOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openSearch: (state, action) => {
            state.isSearchOpen = !state.isSearchOpen;
        },
        openWallet: (state, action) => {
            state.isWalletOpen = true;
        },
        openFavorite: (state, action) => {
            state.isFavoriteOpen = true;

        },
        openCard: (state, action) => {
            state.isCardOpen = true;

        },
        toggleMenu: (state, action) => {
            state.isShowMenu = !state.isShowMenu
        },
        closeMenu: (state, action) => {
            state.isShowMenu = false
        },

        closeSearch: (state, action) => {
            state.isSearchOpen = !state.isSearchOpen;
            state.isShowMenu != state.isShowMenu
        },
        closeWallet: (state, action) => {
            state.isWalletOpen = false;
        },
        closeFavorite: (state, action) => {
            state.isFavoriteOpen = false;
        },
        closeCard: (state, action) => {
            state.isCardOpen = false;
        },
    },
});

export const { openSearch, openWallet, openFavorite, closeSearch, closeWallet, closeFavorite, toggleMenu, openCard, closeCard, closeMenu } = modalSlice.actions;

export default modalSlice.reducer;