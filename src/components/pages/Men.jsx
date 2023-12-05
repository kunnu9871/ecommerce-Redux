import {useSelector, useDispatch} from 'react-redux'

const Men = () => {
  const data = useSelector((state) => state.items);
  const mens= data.filter((product)=> (product.category == "men's clothing"))

  return (
    <div className="grid grid-cols-3 gap-4 m-4">
    {mens.map(({id,image,price,title})=>{
        return <div key={id} className="flex border-2 w-auto p-2 m-2 rounded-lg shadow-xl">
        <div className="flex-none w-52 relative">
            <img src={image} alt="" className="w-full h-auto object-cover rounded-md transition duration-300 transform group-hover:scale-105" />
        </div>
        <form className="flex-auto p-6">
            <div className="flex flex-wrap items-baseline">
                <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
                    {title}
                </h1>
                <div className="flex-auto text-lg font-medium text-slate-500">
                    ${price}
                </div>
                <div className="text-xs leading-6 font-medium uppercase text-slate-500">
                    In stock
                </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                <div className="space-x-1 flex text-sm font-medium">
                    <label>
                        <input className="sr-only peer" name="size" type="radio" value="xs" />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                            XS
                        </div>
                    </label>
                    <label>
                        <input className="sr-only peer" name="size" type="radio" value="s" />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                            S
                        </div>
                    </label>
                    <label>
                        <input className="sr-only peer" name="size" type="radio" value="m" />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                            M
                        </div>
                    </label>
                    <label>
                        <input className="sr-only peer" name="size" type="radio" value="l" />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                            L
                        </div>
                    </label>
                    <label>
                        <input className="sr-only peer" name="size" type="radio" value="xl" />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                            XL
                        </div>
                    </label>
                </div>
            </div>
            <div className="flex space-x-4 mb-5 text-sm font-medium">
                <div className="flex-auto flex space-x-4 pr-4">
                    <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
                        Buy now
                    </button>
                    <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
                        Add to bag
                    </button>
                </div>
                <button className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                    </svg>
                </button>
            </div>
            <p className="text-sm text-slate-500">
                Free shipping on all continental US orders.
            </p>
        </form>
    </div>
    })}
    
</div>
  )
}

export default Men