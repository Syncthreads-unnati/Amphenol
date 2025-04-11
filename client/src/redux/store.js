import { configureStore } from "@reduxjs/toolkit";
import { tabSlice } from "./tabreducer";
import authSlice from "./login"; // Assuming you have an authSlice defined somewhere

export default configureStore({
    reducer: {
        tab: tabSlice,
        auth: authSlice, // Assuming you have an authSlice defined somewhere
    }
})