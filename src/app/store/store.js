import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/productSlice"

const store = configureStore({
    reducer
});

export default store;