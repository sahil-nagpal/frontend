import { createSlice } from '@reduxjs/toolkit';

let initalState = {
    "items":[],
    "totalBill":0,
    "itemOrdered":false,
} 

export const cartSlice = createSlice({
    name:"cartSlice",
    initialState:initalState,
    reducers:{
        addToCart:(state,action)=>{
            try{
                let newItem = action.payload.item
                let existingItem = state.items.find(item => item._id === newItem._id)
                if(!existingItem){
                    state.items.push(newItem)
                    state.totalBill = state.totalBill + (newItem.price * newItem.quantity)
                }
                else{
                    existingItem['quantity'] = existingItem['quantity']+newItem.quantity
                    state.totalBill = state.totalBill + (newItem.price * newItem.quantity)
                }
            }
            catch(err){
                console.log("error in add to cart ",err)
            }
        },
        clearCart:(state,action)=>{
            try{
                state.items = []
            }
            catch(err){
                console.log("error in remove from cart ::",err)
            }
        },
        updateQuantity:(state,action)=>{
            try{
                let itemId = action.payload.itemId
                let type = action.payload.type
                let existingItem = state.items.find(item => item._id === itemId)
                switch(type){
                    case 'add':
                        existingItem.quantity++;
                        state.totalBill = state.totalBill + (existingItem.price * 1)
                        break;
                    case 'remove':
                        if (existingItem.quantity >1){
                            existingItem.quantity--
                            state.totalBill = state.totalBill - (existingItem.price * 1)
                            break;
                        }
                        else{
                            state.items =  state.items.filter(item=>item._id != itemId)
                            state.totalBill = state.totalBill - (existingItem.price * 1)
                            break;
                        }
                }
                if(state.totalBill < 0){
                    state.totalBill = 0
                }
            }
            catch(err){
                console.log("error in updateQuantity ::",err)
            }
        },
        orderItems:(state,action)=>{
            if (action.payload.type == "ordered"){
                state.itemOrdered = true
                state.items = []
                state.totalBill = 0
            }
            if (action.payload.type == "hide-cart"){
                state.itemOrdered = false
            }
        }

    }
})