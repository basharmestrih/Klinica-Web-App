import React, { useEffect, useState } from "react";
import Footer from '../Footer/Footer.jsx'; 

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setCategory,
  setSearchTerm,
  selectFilteredProducts,
} from "../ClinicStore/Redux/Slice.js";
import ProductList from "./Components/ProductList.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import AssistantSection from "./Components/AssistantSection.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import useFetchProducts from "./hooks/useFetchProducts.jsx"; // Adjust path as needed


const ClinicStore = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const filteredProducts = useSelector(selectFilteredProducts);
  useFetchProducts();




  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-full ml-3 pt-10 justify-between">
        {/* Left Column: Search + Grid */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={(term) => dispatch(setSearchTerm(term))}
          />
           {/* Right Column: Assistant & Filters */}
        <AssistantSection
          onCategoryChange={(category) => dispatch(setCategory(category))}
        />

          <div className="grid lg:grid-cols-4 gap-y-10">
            {status === "loading" && (
              <p className="text-center text-gray-600">Loading products...</p>
            )}
            {status === "failed" && (
              <p className="text-center text-red-500">Failed to load products.</p>
            )}
            {status === "succeeded" && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductList
                  key={product.id}
                  products={[product]}
                />
              ))
            ) : (
              status === "succeeded" && (
                <p className="text-center text-gray-600">No products available.</p>
              )
            )}
          </div>
        </div>

       

     
    </div>
  );
};

export default ClinicStore;
