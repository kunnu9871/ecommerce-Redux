import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/PrductCard";

const Men = () => {
  const data = useSelector((state) => state.products.items);
  const mens = data.filter((product) => product.category == "electronics");

  return (
    <div className="grid grid-cols-4 gap-4 m-auto my-6 max-w-7xl">
      {mens.map((data) => {
        return <ProductCard key={data.id} productData={data} />;
      })}
    </div>
  );
};

export default Men;
