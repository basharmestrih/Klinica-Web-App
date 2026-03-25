import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { X } from "lucide-react";
import { removeFromCart, clearCart } from "../../../Redux/CartSlice.js";

const CartPopup = ({ onClose, isOpen }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    dispatch(clearCart());
    onClose();
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-sm transition ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col border-l border-white/50 bg-[linear-gradient(180deg,_rgba(248,251,255,0.98)_0%,_rgba(238,245,255,0.98)_100%)] shadow-[0_24px_80px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-in-out sm:w-[420px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Your cart
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">Shopping Cart</h2>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
            onClick={onClose}
            type="button"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-1 items-center justify-center rounded-[1.8rem] border border-dashed border-slate-200 bg-white/75 px-6 text-center text-slate-500">
              Your cart is empty.
            </div>
          ) : (
            <>
              <ul className="flex-1 space-y-3 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 rounded-[1.5rem] border border-white/70 bg-white/80 p-3 shadow-sm"
                  >
                    <img
                      src={item.imgurl}
                      alt={item.title}
                      className="h-16 w-16 rounded-2xl object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-500">Quantity: {item.quantity}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm font-bold text-[#0A3966]">{item.price} $</span>
                      <button
                        className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        onClick={() => handleRemoveItem(item.id)}
                        type="button"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-[1.8rem] border border-white/70 bg-white/80 p-4 shadow-sm">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Total</span>
                  <span className="text-lg font-bold text-slate-900">{totalPrice.toFixed(2)} $</span>
                </div>

                <button
                  className="mt-4 w-full rounded-full bg-[#0A3966] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#06274c]"
                  onClick={handleCheckout}
                  type="button"
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default CartPopup;
