import Product from '../type/product';
import RootState from '../type/rootstate';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductCart = ({ product } : {product: Product}) => {

    const user = useSelector((state : RootState) => state.user)

    const [count, setCount] = useState(1);



    const HandleRemove = () => {
        const fetchAPI = async() => {
            try {
                const req = await fetch('http://localhost:3000/cart/remove', {
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        user_id: user.id,
                        product_id: product.id,
                    })
                })
                const res = await req.json()
                console.log(res.message)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchAPI();
    }

    return (
        <div className="w-5xl h-40 border rounded-lg flex font-[Roboto] shadow-lg relative cursor-default p-1">
            <img src={product.img} alt={product.name} className="w-40 h-40" />
            {/*Product*/}
            {
                product.formatted_discount_price ? (
                    <div className='w-full h-fit overflow-hidden'>
                        <h3 className='text-2xl font-bold truncate'>{product.name}</h3>
                        <p className='line-through inline mr-4 font-semibold text-gray-500'>{product.formatted_price}đ</p>
                        <p className='text-red-500 inline font-semibold'>{product.formatted_discount_price}</p>
                        <p className='truncate text-sm'>{product.desc}</p>
                    </div>
                ) : (
                    <div className='w-full h-fit overflow-hidden'>
                        <h3 className='text-2xl font-bold truncate'>{product.name}</h3>
                        <p className='text-red-500 inline font-semibold'>{product.formatted_price}đ</p>
                        <p className='text-sm truncate'>{product.desc}</p>
                    </div>
                )
            }
            {/*Add or Remove*/}
            <div className='flex w-fit h-fit absolute cursor-default justify-center items-center space-x-2 rounded-lg p-0.5 top-30 left-42'>
                <button onClick={() => setCount(count - 1)} disabled={count === 1} className='border rounded-lg w-6 h-4 flex items-center justify-center cursor-pointer'>-</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)} className='border rounded-lg w-6 h-4 flex items-center justify-center cursor-pointer'>+</button>
            </div>
            {/*View Product*/}
            <Link
                to={`/product_detail/${product.id}`}>
                <button className=" absolute w-30 h-10 bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-lg top-26 right-10">View product</button>
            </Link>
            <button onClick={HandleRemove} className=" absolute w-36 h-10 bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-lg top-26 right-45">Remove product</button>
        </div>
    )
}

export default ProductCart;