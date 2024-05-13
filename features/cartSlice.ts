import { ProductTypes } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartState {
    items: ProductTypes[]
}

interface RemoveItemPayload {
    id: number,
}

interface increaseQuantity {
    id: number;
}

interface DecreaseQuantity {
    id: number;
}


const initialState: CartState = {
    items: [],
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id)
            if (itemInCart) {
                if (itemInCart.quantity !== undefined) {
                    itemInCart.quantity++;
                }
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeTodo: (state, action: PayloadAction<RemoveItemPayload>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        increaseQuantity: (
            state,
            action: PayloadAction<increaseQuantity>

        ) => {

            const item = state.items.find((item) => item.id === action.payload.id);
            if (item && item.quantity !== undefined) {
                item.quantity++;
            }
        },
        decreaseQuantitiy: (
            state,
            action: PayloadAction<DecreaseQuantity>
        ) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            item && item.quantity !== undefined && item.quantity > 1 ? item.quantity-- : item?.quantity
        }
    }
})

export const { addToCart, decreaseQuantitiy, increaseQuantity, removeTodo } = CartSlice.actions
export const cartReducer = CartSlice.reducer