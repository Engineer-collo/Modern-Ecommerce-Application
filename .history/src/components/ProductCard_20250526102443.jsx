import { useNavigate } from 'react-router-dom';
imort Vi

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const productDetailsView = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={productDetailsView}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-32 w-32 object-contain mb-4 sm:h-40 sm:w-40"
      />
      <h1 className="font-semibold text-base sm:text-lg mb-2 line-clamp-2">{product.title}</h1>
      <p className="text-green-600 font-bold text-sm sm:text-md mb-4">${product.price}</p>

    </div>
  );
};

export default ProductCard;
