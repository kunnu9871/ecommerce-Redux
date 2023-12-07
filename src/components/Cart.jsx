import { useSelector, useDispatch } from 'react-redux';
import {removefromCart, clearCart} from '../app/features/productSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector((state) => state.cartItems)
    return (
        <div>
            {/* {cartItem.length<=0? <div className='text-centre'>The Cart is Empty!!!</div>: <div>
                {cartItem.map((item) => <h1 key={item.id}>{item.title}</h1>)}
            </div> } */}
            

            <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cartItem.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cartItem.map(item => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-auto h-24 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className='mx-4'>{item.quantity}</div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => dispatch(removefromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItem.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <span className="text-blue-600 font-semibold">
            Total: ${cartItem.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </span>
        </div>
      )}
    </div>
            
        </div>

    )
}

export default Cart