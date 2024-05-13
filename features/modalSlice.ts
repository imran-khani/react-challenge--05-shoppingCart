import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isCartOpen: boolean;
    onClose: () => void;
    onCartOpen: () => void;
}


const initialState: ModalState = {
    isCartOpen: false,
    onClose: () => { },
    onCartOpen: () => { },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onCartOpen: (state) => {
            state.isCartOpen = true;
        },
        onClose: (state) => {
            state.isCartOpen = false;
        }
    }
});

export const { onCartOpen, onClose } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;