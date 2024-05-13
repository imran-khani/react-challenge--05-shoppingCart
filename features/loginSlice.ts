import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false,
    onOpen: () => {},
    onClose: () => {},
};


 const loginSlice = createSlice({
    name: "login",
    initialState,

    reducers: {
        onOpen: (state) => {
            state.isOpen = true;
        },
        onClose: (state) => {
            state.isOpen = false;
        },
    },
});

 export const {onClose,onOpen} = loginSlice.actions;
export default loginSlice.reducer;
