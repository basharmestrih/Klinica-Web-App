import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../api/DataBaseClient/SupaBaseClient.jsx";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data, error } = await supabase.from("drugs").select("*");
    if (error) throw new Error(error.message);

    return data.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      imgurl: item.imgurl || "",
    }));
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    category: "all",
    searchTerm: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setCategory, setSearchTerm } = productSlice.actions;

// Selector for filtered products
export const selectFilteredProducts = (state) => {
  const { items, category, searchTerm } = state.products;

  return items
    .filter((product) =>
      category === "all" ? true : product.category.toLowerCase().includes(category.toLowerCase())
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export default productSlice.reducer;
