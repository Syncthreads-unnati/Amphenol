import { configureStore } from "@reduxjs/toolkit";
import { tabSlice } from "./tabreducer";

export default configureStore({
    reducer: {
        tab: tabSlice
    }
})