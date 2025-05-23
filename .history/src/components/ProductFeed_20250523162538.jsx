import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import OfferCountdown from "./OfferCountdown"; // import your countdown component

const ProductFeed = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products once on mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="mt-12 p-4">
        {/* Offer section */}
        <div className="mb-8 text-center">
          <OfferCountdown />
          <p className="mt-4 text-red-600 font-bold text-lg">
            Purchases over $10,000 get <span className="text-red-800">30% OFF</span>!
          </p>
        </div>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
        />

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductFeed;
