import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice.js";
import habitsReducer from "./HabitsSlice.js";
import cartReducer from "./CartSlice.js";
import authReducer from "../../Login/Redux/AuthSlice.jsx"; // ✅ import




const store = configureStore({
  reducer: {
    products: productReducer,
    habits: habitsReducer,
    cart: cartReducer, // Add cart reducer
    auth: authReducer, // ✅ add



  },
});

export default store;
