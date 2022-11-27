import { createSlice } from '@reduxjs/toolkit';
import {getMeals} from '../../api/meals.api'
let initalState = {
    "meals":[],
} 

export const mealSlice = createSlice({
    name:"mealSlice",
    initialState:initalState,
    reducers:{
        newMeals:(state,action)=>{
            try{
                let allMeals = action.payload.meals
                console.log("allMeals>>",allMeals)
                state.meals = allMeals
            
            }
            catch(err){
                console.log("error in add to cart ",err)
            }
        },
    }
})

export const fetchMeals = ()=>{
    return async (dispatch)=>{
        let mealsRes = await getMeals()
        if  (mealsRes.success){
            dispatch(mealSlice.actions.newMeals({"meals":mealsRes.items})) 
        }
        
    }
}