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
    <div className="flex h-full min-h-[360px] w-full flex-col overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/88 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(15,23,42,0.12)] sm:p-5">
      <div className="relative h-48 w-full overflow-hidden rounded-[1.4rem] bg-slate-100">
        {productModel.imgurl ? (
          <img
            src={`${productModel.imgurl}`}
            alt={productModel.name}
            className="h-full w-full rounded-[1.4rem] object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => (e.target.style.display = "none")}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
            No Image
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-grow flex-col">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            {productModel.category}
          </span>
          <span className="text-lg font-bold text-[#0A3966]">${productModel.price}</span>
        </div>

        <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">{productModel.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          Clean product presentation with faster actions for browsing and adding items to your cart.
        </p>

        <div className="mt-auto flex gap-2 pt-5">
          <button
            className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-[#0A3966] py-3 text-sm font-semibold text-white transition hover:bg-[#06274c]"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
            <span>Add</span>
          </button>

          <button
            className="flex flex-1 items-center justify-center gap-1.5 rounded-2xl border border-blue-200 bg-blue-50 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            onClick={() => handleShowDetails?.(productModel)}
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
