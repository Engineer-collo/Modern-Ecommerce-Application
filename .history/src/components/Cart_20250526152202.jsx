import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart = [], removeFromCart }) => {
  const navigate = useNavigate()
  const handleNavigateHome = () => navigate('/')
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 py-10">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-4">
  <p className="text-center text-gray-600">Your cart is empty.</p>
  <button onClick={handleNavigateHome} className="text-2xl bg-purple-500 text-white px-4 py-2 rounded-lg">
    Start Shopping
  </button>
</div>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4 border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 object-contain"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        ${item.price} × {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => removeFromCart(item)}
                  >
                    −
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-2xl font-bold text-right">
              Total: ${total.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
