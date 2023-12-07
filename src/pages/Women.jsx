import {useSelector, useDispatch} from 'react-redux'
import ProductCard from '../components/cards/PrductCard';

const Men = () => {
  const data = useSelector((state) => state.items);
  const mens= data.filter((product)=> (product.category == "women's clothing"))

  return (
    <div className="grid grid-cols-4 gap-4 m-auto my-6 max-w-7xl">
    {mens.map(({id,image,price,title})=>{
        return <ProductCard 
        key={id}
        id= {id}
        image= {image}
        price= {price}
        title= {title}
        />
    })}
</div>
  )
}

export default Men