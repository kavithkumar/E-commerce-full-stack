import { createSlice } from "@reduxjs/toolkit"

const initialState={cartItems:[]}
export const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cartItems.push(action.payload)
        },
        removeCart:(state,action)=>{
            state.cartItems.pop(action.payload)
        }
    }
})
export const {addToCart,removeCart}=CartSlice.actions
export default CartSlice.reducer