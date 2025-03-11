import { CubeIcon, MagnifyingGlassIcon, UserCircleIcon,ShoppingCartIcon } from '@heroicons/react/24/outline'


import { Link } from "react-router-dom";


const Navbar = () => {

    const isUser = false;

    return (
        <header className='border-b-1 font-[Roboto]'>
            <nav className="my-2 flex justify-between items-center px-4">
                {/*Logo*/}
                <Link to='/'>
                    <div className="flex items-center cursor-pointer hover:text-blue-300">
                        <CubeIcon className="w-12 h-12" />
                        <h1 className="text-3xl font-bold">Nexora</h1>
                    </div>
                </Link>

                {/*Navigate*/}
                <div>
                    <ul className="flex gap-4">
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/product'>Products</Link></li>
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/laptop'>Laptops</Link></li>
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/hardware'>Hardwares</Link></li>
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/monitors'>Displays</Link></li>
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/accesories'>Accesories</Link></li>
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/support'>Support</Link></li>
                    </ul>
                </div>

                {/*Search Bar*/}
                <div className='relative'>
                    <input type="text" className='border w-2xs h-8 rounded-sm px-2 hover:border-blue-300 focus:border-blue-300' placeholder='Search'/>
                    <MagnifyingGlassIcon className='w-5 h-5 absolute right-2 top-1.5' />
                </div>
                
                {/*Cart, Profile*/}
                <div className='flex gap-x-4'>
                    {
                        isUser ? (
                            <div className=''>
                                <div>
                                    <UserCircleIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' />
                                </div>
                                <div>
                                    <a>Profile</a>
                                    <a>Sign out</a>
                                </div>
                            </div>
                        ) : (
                            <div className='relative group'>
                                <div className='flex gap-x-2 items-center cursor-default'>
                                    <p>Guest</p>    
                                    <UserCircleIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' />
                                </div>
                                <div className='absolute mt-2 w-30 right-1 top-6 group-hover:block hidden shadow bg-white border rounded-lg z-1'>
                                    <Link to='/login' className='block hover:bg-gray-200 text-center rounded-t-lg'>Login</Link>
                                    <Link to='/register' className='block hover:bg-gray-200 text-center rounded-b-lg'>Sign up</Link>
                                </div>
                            </div>
                        )
                    }
                    <ShoppingCartIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' />
                </div>
            </nav>
        </header>
    )
}

export default Navbar;