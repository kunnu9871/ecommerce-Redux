import { useSelector} from 'react-redux'
import ProductCard from './cards/PrductCard';


const ProductsList = () => {
    const data = useSelector((state) => state.products.items);

    return (
        <div className="grid grid-cols-4 gap-4 m-auto my-6 max-w-7xl">
            {data.map((data) => {
                return <ProductCard
                key={data.id}
                productData = {data}
                />
            })}

        </div>
    )
}

export default ProductsList;

