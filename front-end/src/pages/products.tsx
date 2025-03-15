import asus_tuf_f15 from '../assets/products/asus_tuf_f15.svg'
import corsair_keyboard from '../assets/products/corsair_keyboard.svg'
import logitech_mouse from '../assets/products/logitech_mouse.svg'
import hyperx_cloud_stinger from '../assets/products/hyperx_cloud_stinger.svg'
import asus_swiftplay from '../assets/products/asus_monitor.svg' 
import { BackwardIcon } from '@heroicons/react/24/outline'   

import ProductCard from '../components/product_card'
import { ForwardIcon } from '@heroicons/react/24/outline'

const products = () => {

    const Products = [
        {
            id: 1,
            name: 'ASUS TUF F15',
            discount: true,
            offer_price: '17.800.000đ',
            price: '20.000.000đ',
            genre: 'laptop',
            img: asus_tuf_f15,
        },
        {
            id: 2,
            name: 'ASUS SWIFT PLAY',
            discount: true,
            offer_price: '3.680.000đ',
            price: '4.380.000đ',
            genre: 'display',
            img: asus_swiftplay,
        },
        {
            id: 3,
            name: 'HYPERX CLOUD STINGER III',
            discount: false,
            offer_price: null,
            price: '6.680.000đ',
            genre: 'accesories',
            img: hyperx_cloud_stinger,
        },
        {
            id: 4,
            name: 'LOGITECH G502 HERO',
            discount: true,
            offer_price: '480.000đ',
            price: '520.000đ',
            genre: 'accesories',
            img: logitech_mouse,
        },
        {
            id: 5,
            name: 'CORSAIR K520 LOWPROFILE',
            discount: true,
            offer_price: '1.280.000đ',
            price: '2.000.000đ',
            genre: 'accesories',
            img: corsair_keyboard,
        },
    ]


    return (
        <main className='px-8 py-12 bg-gray-100 space-y-12'>
            {/*Banners*/}
            <div>

            </div>
            {/*Sort*/}
            <div>
                
            </div>
            <div className='grid grid-cols-5 gap-2'>
                {
                    Products.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))
                }
            </div>

            {/*Pagination*/}
            <div className='w-full flex justify-center items-center'>
                <button className='flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer'>{<BackwardIcon className='w-10 h-10'/>}</button>
                <button className='flex items-center justify-center font-bold w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer'>1</button>
                <button className='flex items-center justify-center font-bold w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer'>2</button>
                <button className='flex items-center justify-center font-bold w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer'>3</button>
                <button className='flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-300 cursor-pointer'>{<ForwardIcon className='w-10 h-10'/>}</button>
            </div>
        </main>
    )
}

export default products;