import { cartReducer } from '@/features/cartSlice'
import loginSlice from '@/features/loginSlice'
import { modalReducer } from '@/features/modalSlice'
import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      loginSlice: loginSlice,
      cartSlice: cartReducer,
      modalSlice: modalReducer,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']