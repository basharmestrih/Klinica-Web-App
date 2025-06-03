import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    category: "all",
    searchTerm: "", // NEW
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

// 🔎 Selector for filtered products
export const selectFilteredProducts = (state) => {
  const { items, category, searchTerm } = state.products;

  return items
    .filter((product) =>
      category === "all" ? true : product.category.toLowerCase().includes(category)
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export const { setCategory, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
