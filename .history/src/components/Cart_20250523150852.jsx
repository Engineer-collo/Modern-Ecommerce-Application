import React from "react";

const Cart = ({ cart = [], removeFromCart }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <div>
                  <img src={item.image} alt=""
                          className="h-40 w-40 object-contain mb-4"

                  />
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  className="bg-red-500 text-white px-2 rounded"
                  onClick={() => removeFromCart(item)}
                >
                  −
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-2xl text-right font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
