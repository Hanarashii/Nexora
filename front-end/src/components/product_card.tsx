import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

    return (
        <div
         className="border relative w-70 h-[350px] group bg-white flex flex-col justify-center items-center font-[Roboto] cursor-pointer rounded-lg hover:shadow-2xl">
            <img src={product.img} alt="" className="w-[250px] h-[250px]" />
            <div className="text-left w-full px-2">
                <h3 className="text-[20px] font-bold truncate">{product.name}</h3>
                {
                    product.discount ? (
                    <div className="space-x-4">
                        <p className="inline line-through text-gray-700">{product.price}</p>
                        <p className="inline text-red-500">{product.offer_price}</p>
                    </div>
                    )
                     : (
                        <p className=" text-red-500">{product.price}</p>
                    )
                }
            </div>

                <Link
                 to={`/product_detail/${product.id}`}><button className="absolute w-30 h-10 bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-lg left-3 opacity-0 group-hover:animate-viewbutton">
                    View product</button></Link>
                <button
                 className="absolute w-30 h-10 bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-lg right-3 opacity-0 group-hover:animate-viewbutton">
                    Add to cart</button>

        </div>
    )
}

export default ProductCard