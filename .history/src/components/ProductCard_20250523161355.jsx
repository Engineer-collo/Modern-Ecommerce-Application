import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-40 object-contain mb-4"
      />
      <h1 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h1>
      
      <p className="text-green-600 font-bold text-md mb-1">${product.price}</p>
      
      <p className="text-sm text-red-600 font-semibold mb-3">
        For purchases above $10,000 get <span className="text-red-700">30% OFF</span>!
      </p>
      
      <button
        onClick={() => addToCart(product)}
        className="bg-purple-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
