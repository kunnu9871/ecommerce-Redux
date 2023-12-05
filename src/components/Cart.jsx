import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
    const cartItem = useSelector((state) => state.cartItems)
    return (
        <div>
            {cartItem.length<=0? <div className='text-centre'>The Cart is Empty!!!</div>: <div>
                {cartItem.map((item) => <h1>{item.title}</h1>)}
            </div> }
            
            
        </div>

    )
}

export default Cart