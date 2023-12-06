import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/productSlice";

const ProductCard = ({id, image, price, title }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border-2">
      <img
        className="w-auto h-48 object-cover mb-4 m-auto"
        src={image}
        alt="Product"
      />
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-blue-600 font-semibold">₹ {price}</span>
        <button 
          onClick={()=>dispatch(addToCart({id, image, price, title }))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
