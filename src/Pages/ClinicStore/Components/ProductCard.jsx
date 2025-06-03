import React from "react";
import { ShoppingCart, ChevronsDown } from "lucide-react";
import { addToCart } from "../Redux/CartSlice.js";
import { useDispatch } from "react-redux";

const ProductCard = ({ product, handleShowDetails }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("Adding Product:", product);
    if (product) {
      dispatch(addToCart(product));
    } else {
      console.error("Error: Product is undefined");
    }
  };

  return (
    <div className="bg-gray-200 p-5 rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg flex flex-col w-[275px] h-[320px]">
  {/* Image */}
  <div>
    {product.image ? (
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg"
        onError={(e) => (e.target.style.display = 'none')}
      />
    ) : (
      <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-500">No Image</div>
    )}
  </div>

  {/* Main content flex container */}
  <div className="flex flex-col flex-grow">
    {/* Title at the top */}
    <div className="mt-2">
      <h3 className="text-sm font-bold text-black line-clamp-2">{product.title}</h3>
    </div>

    {/* Category + Price in middle */}
    <div className="flex justify-between items-center text-sm text-gray-600 mt-auto mb-auto">
      <p className="text-gray-500">Category: {product.category}</p>
      <p className="font-bold text-red-500">{product.price}$</p>
    </div>

    {/* Buttons at the bottom */}
    <div className="flex flex-row space-x-3 mt-auo pt-3">
      <button
        className="flex-1 bg-[#007bff] text-gray-100 font-bold py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-700 transition"
        onClick={handleAddToCart}
      >
        <ShoppingCart size={18} />
        <span>Add</span>
      </button>

      <button
        className="flex-1 bg-[#007bff] text-gray-100 font-bold py-2 rounded-md flex items-center justify-center gap-1 hover:bg-blue-700 transition"
        onClick={() => handleShowDetails(product)}
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
