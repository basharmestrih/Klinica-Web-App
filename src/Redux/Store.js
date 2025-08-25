import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./DrugsFetchingSlice.js";
import cartReducer from "./CartSlice.js";
import authReducer from "./AuthSlice.jsx"; // ✅ import




const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer, // Add cart reducer
    auth: authReducer, // ✅ add



  },
});

export default store;
