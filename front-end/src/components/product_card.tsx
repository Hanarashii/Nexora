

const ProductCard = ({ product }) => {

    return (
        <div
         className="border w-[300px] h-[350px] flex flex-col justify-center items-center font-[Roboto] cursor-pointer rounded-[2px] shadow-lg">
            <img src={product.img} alt="" className="w-[250px] h-[250px]" />
            <div className="text-left w-full px-2">
                <h3 className="text-[20px] font-bold truncate">{product.name}</h3>
                <p className="text-red-500 text-base truncate">{product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard