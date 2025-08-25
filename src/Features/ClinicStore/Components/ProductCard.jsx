import React from "react";
import { ShoppingCart, ChevronsDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/CartSlice.js";
import { DrugModel } from "../../../Models/DrugModel.jsx";

const ProductCard = ({ product, handleShowDetails }) => {
  const dispatch = useDispatch();

  // Ensure product is DrugModel instance
  const productModel = product instanceof DrugModel ? product : DrugModel.fromPlainObject(product);

  const handleAddToCart = () => {
    dispatch(addToCart(productModel));
  };

  return (
    <div className="bg-gray-50 p-5 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:scale-105 flex flex-col w-[275px] h-[350px]">
      {/* Image */}
      <div className="relative w-full h-44 overflow-hidden rounded-lg">
        {productModel.imgurl ? (
          <img
            src={`${productModel.imgurl}`}
            alt={productModel.name}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
            onError={(e) => (e.target.style.display = "none")}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow mt-3">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-2 mb-2">{productModel.name}</h3>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
          <span className="italic font-semibold">{productModel.category}</span>
          <span className="text-lg font-bold text-blue-600">${productModel.price}</span>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            className="flex-1 bg-blue-600 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-blue-700 transition"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
            <span>Add</span>
          </button>

          <button
            className="flex-1 border border-blue-600 text-blue-600 font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-blue-50 transition"
            onClick={() => handleShowDetails(productModel)}
          >
            <ChevronsDown size={18} />
            <span>View</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
