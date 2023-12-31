import { useSelector} from 'react-redux'
import ProductCard from './cards/PrductCard';


const ProductsList = () => {
    const data = useSelector((state) => state.items);

    return (
        <div className="grid grid-cols-4 gap-4 m-auto my-6 max-w-7xl">
            {data.map(({ id, image, price, title }) => {
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

export default ProductsList;

