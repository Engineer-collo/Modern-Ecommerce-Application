import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading product...</p>;

  return (
    <>
    <div> 
      <button className='mt-2' ><img className='ml-2 font-bold h-6' src="/back.png" alt="" /></button>
      <h1>De</h1>
    </div>
    <div className="p-4 sm:p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg mt-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-60 h-60 object-contain rounded-xl"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-sm text-gray-500 mb-1"><span className='font-bold text-black'>Category</span>: {product.category}</p>
          <p className="text-green-600 text-xl font-semibold mb-3">${product.price}</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">{product.description}</p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-full bg-purple-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
