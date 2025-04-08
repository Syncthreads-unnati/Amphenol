import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
   name: "tab",
   initialState:{
    value:"live"
   },
   reducers:{
    tabchange:(state,action)=>{
        state.value = action.payload;
    }
   }
})

export const {tabChange}  = tabSlice.actions;
export default tabSlice.reducer;