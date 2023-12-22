// here we define action and reducer

import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:'conterApp',
    initialState:{
        value:0
    },
    reducers:{
        // actions are created inside the resducer key.(actions are logics)
        // logic to update the data
        increment:(state,action)=>{
            console.log("=====Action=====");
            console.log(action);
            state.value=state.value+action.payload;
        },
        decrement:(state,action)=>{
        
            state.value=state.value-action.payload;
        },
        reset:(state)=>{
            state.value=0;
        }
    }
    })
    export const {increment,decrement,reset}=counterSlice.actions;
    export default counterSlice.reducer;