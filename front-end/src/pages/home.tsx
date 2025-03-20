
import asus_offer from '../assets/offer/special_offers_1.svg'
import razer_offer from '../assets/offer/special_offers_2.svg'
import asus_offer_2 from '../assets/offer/special_offer_3.svg'
import asus_offer_3 from '../assets/offer/special_offer_4.svg'

import Product from '../type/product'

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


    const[Products,setProducts] = useState<Product[]>([])

    useEffect(() => {
        const connect = async() => {
            try {
                const res = await fetch('http://localhost:3000/products');
                const response = await res.json();
                setProducts(response);
                console.log(response)
            }
            catch (err) {
                console.error(err);
            }
        }
        connect();
    },[])

    const Offers = [
        {
            id: '1',
            img: asus_offer,
        },
        {
            id: '2',
            img: asus_offer_2,
        },
        {
            id: '3',
            img: asus_offer_3,
        },
        {
            id: '4',
            img: razer_offer,
        }

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
        <main className='px-8 py-12 font-[Roboto] overflow-hidden bg-gray-100'>
            <div className='mt-5 space-y-20'>
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
                            {Products.map(product =>
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
                            className={`${(CurrentGenre === 1) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline-forward after:animate-underline-backward'}`}>
                                <CiLaptop />Laptops</button>
                            <button
                            onClick={() => setCurrentGenre(2)}
                            className={`${(CurrentGenre === 2) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline-forward after:animate-underline-backward'}`}>
                                <GoCpu />Hardwares</button>
                            <button
                            onClick={() => setCurrentGenre(3)}
                            className={`${(CurrentGenre === 3) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline-forward after:animate-underline-backward'}`}>
                                <CiMonitor />Displays</button>
                            <button
                            onClick={() => setCurrentGenre(4)}
                            className={`${(CurrentGenre === 4) ? 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:absolute after:bg-black after:w-full after:h-0.5 after:bottom-0 after:left-0' : 'flex items-center text-2xl relative gap-x-2 px-4 py-2 cursor-pointer after:content-[""] after:bg-black after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:animate-underline-forward after:animate-underline-backward'}`}>
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