import { lazy } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../type/product";

const ProductCard = lazy(() => import('../components/product_cart'))


const Cart = () => {

    const[products, setProducts] = useState<Product[]>([]);

    const userID = useSelector((state: { user: { id: number } }) => state.user.id)
    useEffect(() => {
        const GetProducts = async() => {
            const response = await fetch('http://localhost:3000/cart',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: userID,
                })
            })
            const data = await response.json();
            setProducts(data);
            console.log(data)
        }
        GetProducts();
    }, [])

    return(
        <main  className="px-8 py-12 font-[Roboto] overflow-hidden bg-gray-100 flex gap-x-6">
            {products.length > 0 ? (
                <div className="space-y-8">
                    {/*Cart*/}
                        {products.map(product => 
                            <ProductCard product={product} />
                        )}
                </div>
                ) : (
                    <div>

                    </div>
                )
            }
            {/*Summary*/}
            <div className="border w-[500px] h-fit rounded-lg shadow-lg p-4">
            <h2 className="font-semibold text-3xl">Summary</h2>
            <hr className="border-0.5 mt-2 mb-2" />
            <div className="space-y-1 w-full">
                <h3 className="font-semibold text-2xl">Items</h3>
                {products.map(product => (
                    product.formatted_discount_price ? (
                        <div className="flex justify-between">
                            <p>{product.name}</p>
                            <p className="text-red-500">{product.formatted_discount_price}đ</p>
                        </div>
                    ) : (
                        <div className="flex justify-between">
                            <p>{product.name}</p>
                            <p className="text-red-500">{product.formatted_price}đ</p>
                        </div>
                    )
                ))
                }
            </div>
            <hr className="border-0.5 mt-2 mb-2" />
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">Total</h2>
                {
                    products.length > 0 ? (
                        <p className="text-red-500">{products[0].total}đ</p>
                    ) : (
                        <p className="text-red-500">0đ</p>
                    )
                }
            </div>
            <input type="text" className="border w-full h-12 px-2 rounded-lg" placeholder="Your discount code here" />
            <Link to='/payment'><button className="mt-4 w-full h-12 text-40 bg-black text-white cursor-pointer rounded-lg">Proceed to payment</button></Link>
        </div>
        </main>
    )
}

export default Cart;