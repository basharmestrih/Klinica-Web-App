import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../Redux/CartSlice.js";

const CartPopup = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    dispatch(clearCart());  // Clears the cart after checkout
    onClose();  // Closes the cart popup
  };

  return (
<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
<div className="bg-[#F8F8FF] w-96 max-h-[80vh] overflow-y-auto p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-600 text-xl" onClick={onClose}>
        &times;
      </button>

        {/* Cart Title */}
        <h2 className="text-xl font-semibold text-center mb-4">Shopping Cart</h2>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-2 border-b">
                {/* Product Image */}
                <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />

                {/* Product Title */}
                <span className="flex-1 text-gray-700 text-sm mx-4">{item.title} (x{item.quantity})</span>

                {/* Remove Button */}
                <button
                  className="text-red-500 hover:text-red-700 text-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Checkout Button */}
        {cartItems.length > 0 && (
          <button
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
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
