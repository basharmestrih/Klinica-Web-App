import React from "react";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <div className={`fixed top-0 right-0 h-full w-96 bg-[#F8F8FF] shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
      <div className="p-4 h-full flex flex-col">
        <button className="absolute top-4 right-4 text-gray-600 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-semibold text-center mb-5">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 overflow-y-auto flex-1">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center p-2 bg-cyan-50 rounded-xl border-b relative">
                <img src={item.imgurl} alt={item.title} className="w-12 h-15 object-cover rounded" />
                <span className="flex-1 text-gray-400 font-bold text-sm mx-2 text-left">
                  {item.name} (x{item.quantity})
                </span>
                
                <span className="text-[#007bff] text-sm font-extrabold mx-8 text-right">
                  {item.price} $
                </span>

                {/* Remove Button */}
                <button
                  className="absolute top-0 right-2 text-red-600 text-lg font-extrabold"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  &minus;
                </button>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <button
            className="w-full bg-blue-600 text-gray-100 font-bold py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
            onClick={handleCheckout}
          >
            Proceed to Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
