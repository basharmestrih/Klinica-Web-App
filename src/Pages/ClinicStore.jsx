import React, { useEffect, useState } from "react";
import Footer from '../Components/Footer/Footer.jsx'; 

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setCategory,
  setSearchTerm,
  selectFilteredProducts,
} from "../Redux/DrugsFetchingSlice.js";
import ProductList from "../Features/ClinicStore/Components/ProductList.jsx";
// Components/SearchBar.jsx
import { FunnelIcon } from "@heroicons/react/24/outline";
import CartPopup from "../Features/ClinicStore/Components/CartPopup.jsx";
import ProductDetails from "../Features/ClinicStore/Components/ProductDetails.jsx";
import AssistantSection from "../Features/ClinicStore/Components/AssistantSection.jsx";
import SearchBar from "../Features/ClinicStore/Components/SearchBar.jsx";
import useFetchProducts from "../Features/ClinicStore/hooks/useFetchProducts.jsx"; // Adjust path as needed


const ClinicStore = () => {
      const [isCartOpen, setIsCartOpen] = useState(false);


const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  }



  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const filteredProducts = useSelector(selectFilteredProducts);
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  useFetchProducts();




  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-full ml-3 pt-10 justify-between">
         <div className="flex justify-between px-5">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={(term) => dispatch(setSearchTerm(term))}
          />
                 </div>

<button
  className="fixed top-20 right-8 p-3 bg-gray-800 hover:bg-gray-600 rounded-full shadow-lg z-[25]"
  onClick={handleOpenCart}
>
  {/* Badge for item count */}
  {cartItems.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
      {cartItems.length}
    </span>
  )}

  {/* Cart icon placeholder (you can replace with HeroIcon or your cart SVG) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="white"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13L5.4 5M16 19a2 2 0 11-4 0m8 0a2 2 0 11-4 0"
    />
  </svg>
</button>

       

      {/* Cart Popup */}
      <CartPopup onClose={handleCloseCart} isOpen={isCartOpen} />
         




        <AssistantSection
          onCategoryChange={(category) => dispatch(setCategory(category))}
        />

          <div className="grid lg:grid-cols-4 gap-y-10">
         {status === "loading" && (
  <div className="col-span-full flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center">
      {/* Bigger Spinner */}
      <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      {/* Text */}
      <p className="mt-5 text-lg font-bold italic text-gray-700">Loading products...</p>
    </div>
  </div>
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
