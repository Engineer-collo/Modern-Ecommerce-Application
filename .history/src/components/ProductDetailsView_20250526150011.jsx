import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ProductDetails = ({ addToCart }) => {
  const homeNavigate = useNavigate()
  const handleBack = () => homeNavigate(-1)

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
    <div className="flex items-center space-x-4 p-2 md:hidden">
  <button onClick={handleBack}>
    <img className="text-2xl h-6 w-6" src="/image.png" alt="Back" />
  </button>
  <h1 className="text-xl font-bold">Details</h1>
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

    </>
  );
};

export default ProductDetails;
