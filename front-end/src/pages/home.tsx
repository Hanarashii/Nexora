import asus_tuf_f15 from '../assets/products/asus_tuf_f15.svg'
import corsair_keyboard from '../assets/products/corsair_keyboard.svg'
import logitech_mouse from '../assets/products/logitech_mouse.svg'
import hyperx_cloud_stinger from '../assets/products/hyperx_cloud_stinger.svg'
import asus_swiftplay from '../assets/products/asus_monitor.svg'

import asus_offer from '../assets/offer/special_offers_1.svg'
import razer_offer from '../assets/offer/special_offers_2.svg'
import asus_offer_2 from '../assets/offer/special_offer_3.svg'
import asus_offer_3 from '../assets/offer/special_offer_4.svg'

// import { Link } from 'react-router-dom'
import { lazy, useEffect } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CiLaptop, CiDesktopMouse2, CiMonitor } from "react-icons/ci";
import { GoCpu } from "react-icons/go";

import { useState } from 'react'

const SpecialOffers = lazy(() => import('../components/special_offers'))
const ProductCard = lazy(() => import('../components/product_card'))

const Home = () => {
    const [CurrentGenre, setCurrentGenre] = useState(1)
    console.log(CurrentGenre);


    const[Products,setProducts] = useState<{ id: number, category_id: number, [key: string]: any }[]>([]);

    useEffect(() => {
        const connect = async() => {
            try {
                const res = await fetch('http://localhost:3000/products');
                const response = await res.json();
                setProducts(response);
            }
            catch (err) {
                console.error(err);
            }
        }
        connect();
    },[])

    const Offers = [
        {
            id: 1,
            img: asus_offer,
        },
        {
            id: 2,
            img: asus_offer_2,
        },
        {
            id: 3,
            img: asus_offer_3,
        },
        {
            id: 4,
            img: razer_offer,
        }

    ]

    const Featured_Products = [
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

    const Offers_Settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
    }

    const Products_Settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
    }

    return (
        <main className='px-8 py-12 font-[Roboto] overflow-hidden bg-gray-100'>                <div className='mt-5 space-y-20'>
                    {/*Banners*/}
                    <div>
                        <Slider {...Offers_Settings}>
                            {Offers.map(offer => 
                                <SpecialOffers key={offer.id} offer={offer} />
                            )}
                        </Slider>
                    </div>

                    {/*Featured*/}
                    <div>
                        <h1 className='text-4xl font-bold mb-2'>Featured Products</h1>
                        <Slider {...Products_Settings}>
                            {Featured_Products.map(product =>
                                <ProductCard key={product.id} product={product} />
                            )}
                        </Slider>
                    </div>

                    {/*Offers on Homepage*/}
                    <div className='flex flex-col justify-center items-center space-y-10'>
                        <h1 className='text-4xl font-bold mb-2'>Product's Offers</h1>
                        <nav className='flex gap-x-10'>
                            <button
                            onClick={() => setCurrentGenre(1)}
                            className={`${(CurrentGenre === 1) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline'}`}>
                                <CiLaptop />Laptops</button>
                            <button
                            onClick={() => setCurrentGenre(2)}
                            className={`${(CurrentGenre === 2) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline'}`}>
                                <GoCpu />Hardwares</button>
                            <button
                            onClick={() => setCurrentGenre(3)}
                            className={`${(CurrentGenre === 3) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline'}`}>
                                <CiMonitor />Displays</button>
                            <button
                            onClick={() => setCurrentGenre(4)}
                            className={`${(CurrentGenre === 4) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline'}`}>
                                <CiDesktopMouse2 />Accesories</button>
                        </nav>
                        {(Products.length > 0) ? (
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    Products.filter(product => product.category_id === CurrentGenre).map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div>Loading</div>
                        )}
                    </div>
                </div>
        </main>
    )
}

export default Home;