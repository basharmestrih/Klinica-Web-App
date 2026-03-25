import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pill, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import {
  selectFilteredProducts,
  setCategory,
  setSearchTerm,
} from "../Redux/DrugsFetchingSlice.js";
import ProductList from "../Features/ClinicStore/Components/ProductList.jsx";
import CartPopup from "../Features/ClinicStore/Components/CartPopup.jsx";
import AssistantSection from "../Features/ClinicStore/Components/AssistantSection.jsx";
import SearchBar from "../Features/ClinicStore/Components/SearchBar.jsx";
import useFetchProducts from "../Features/ClinicStore/hooks/useFetchProducts.jsx";

const ClinicStore = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const filteredProducts = useSelector(selectFilteredProducts);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0),
    [cartItems]
  );

  useFetchProducts();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_#f8fbff_0%,_#eef5ff_45%,_#ffffff_100%)]">
      <div className="absolute inset-x-0 top-0 h-64 bg-[linear-gradient(120deg,rgba(10,57,102,0.08),rgba(37,99,235,0.02))]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700 shadow-sm backdrop-blur-sm">
              <Sparkles size={14} />
              Klinica Store
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Wellness essentials with a calmer shopping experience.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Search medicines faster, filter by need, and review products in a layout designed to
              stay clear and comfortable on both desktop and mobile.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{filteredProducts.length} products</p>
                  <p className="text-sm text-slate-500">Matched to your current search</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Pill size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Quick category filters</p>
                  <p className="text-sm text-slate-500">Browse by symptom or health need</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Mobile-ready browsing</p>
                  <p className="text-sm text-slate-500">Cleaner spacing across small screens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="fixed bottom-5 right-4 z-[25] inline-flex items-center gap-3 rounded-full bg-[#0A3966] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(10,57,102,0.35)] transition hover:bg-[#06274c] sm:bottom-6 sm:right-6"
          onClick={() => setIsCartOpen(true)}
          type="button"
        >
          {totalItems > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-[#0A3966]">
              {totalItems}
            </span>
          )}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h12.4M7 13L5.4 5M16 19a2 2 0 11-4 0m8 0a2 2 0 11-4 0"
            />
          </svg>
          <span>Cart</span>
        </button>

        <CartPopup onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />

        <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/85 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-6 lg:mt-10 lg:p-8">
          <div className="flex flex-col gap-4">
            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={(term) => dispatch(setSearchTerm(term))}
            />
            <AssistantSection onCategoryChange={(category) => dispatch(setCategory(category))} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {status === "loading" && (
            <div className="col-span-full flex min-h-[50vh] items-center justify-center rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full border-8 border-blue-500 border-t-transparent animate-spin" />
                <p className="mt-5 text-lg font-semibold text-slate-700">Loading products...</p>
              </div>
            </div>
          )}

          {status === "failed" && (
            <div className="col-span-full rounded-[2rem] border border-red-100 bg-white/80 p-8 text-center text-red-500 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              Failed to load products.
            </div>
          )}

          {status === "succeeded" && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductList key={product.id} products={[product]} />
            ))
          ) : (
            status === "succeeded" && (
              <div className="col-span-full rounded-[2rem] border border-dashed border-slate-200 bg-white/80 px-6 py-12 text-center text-slate-500 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                No products available.
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ClinicStore;
