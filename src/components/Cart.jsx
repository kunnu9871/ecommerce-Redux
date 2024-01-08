import { useSelector, useDispatch } from "react-redux";
import { removefromCart, clearCart } from "../app/features/productSlice";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.products.cartItems);
  return (
    <div>
      {/* {cartItem.length<=0? <div className='text-centre'>The Cart is Empty!!!</div>: <div>
                {cartItem.map((item) => <h1 key={item.id}>{item.title}</h1>)}
            </div> } */}

      <div className="bg-white p-6 rounded-lg shadow-md">
        {cartItem.length === 0 ? (
          <div>
            <p className="text-2xl font-semibold mb-4">Your cart is empty.</p>
            <button
              onClick={() => navigate("/")}
              className="my-10 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div>
            {cartItem.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-auto h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>

              {/* increment and decrement section */}
                <div className="flex gap-5">
                  <button className="border-2 rounded-lg px-2">-</button>
                  <div className="mx-4">{item.quantity}</div>
                  <button className="border-2 rounded-lg px-2">+</button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removefromCart(item.id))}
                  >
                    <FaTrash />
                  </button>
                </div>


              </div>
            ))}
          </div>
        )}

        {cartItem.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <span className="text-blue-600 font-semibold">
              Total: $
              {cartItem
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </span>
            <button
              onClick={() => alert("checkOut")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-96"
            >
              Check Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
