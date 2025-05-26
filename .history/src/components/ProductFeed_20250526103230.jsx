import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import OfferCountdown from "./OfferCountdown";
import VideoSlider from './VideoSlider';


const ProductFeed = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url1 = 'https://www.w3schools.com/html/mov_bbb.mp4'

  const url2 = 'https://www.w3schools.com/html/mov_bbb.mp4'

  const url3 = 'https://youtube.com/shorts/VDe2Od7ibNs?si=HJWy_RSZLtNHbS_W'
  const url4 = 'https://youtube.com/shorts/VDe2Od7ibNs?si=HJWy_RSZLtNHbS_W'
  
  const videos = [url1, url2, url3, url4]

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
    <VideoSlider videos={videos}/>
      <div className="mt-12 p-4 max-w-7xl mx-auto">
        {/* Modern styled offer card */}
        <div className="mb-10 p-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white max-w-xl mx-auto">
          <OfferCountdown />
          <p className="mt-6 text-center text-lg sm:text-xl font-semibold tracking-wide">
            Purchases over{" "}
            <span className="text-yellow-300 underline decoration-yellow-300 underline-offset-4">
              $10,000
            </span>{" "}
            get{" "}
            <span className="text-yellow-400 font-extrabold drop-shadow-md">
              30% OFF
            </span>
            !
          </p>
        </div>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6 p-3 w-full border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-500 focus:border-transparent transition"
        />

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
