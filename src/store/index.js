import { configureStore } from '@reduxjs/toolkit';
import  {cartSlice} from './slices/cartSlice';
import { mealSlice } from './slices/mealSlice';
export default configureStore({
    reducer: {
        cart:cartSlice.reducer,
        meal:mealSlice.reducer
    },
  })

export const cartActions = cartSlice.actions