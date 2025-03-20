import { CubeIcon, MagnifyingGlassIcon, UserCircleIcon,ShoppingCartIcon } from '@heroicons/react/24/outline'

import { Link } from "react-router-dom";
import { logout } from '../redux/userSlice';
import { useSelector ,useDispatch } from 'react-redux';
import { useState } from 'react';

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const dispatch = useDispatch();
    const username = useSelector((state: { user: { username: string } }) => state.user.username)
    const isLogged = useSelector((state: { user: { isLoggedIn: boolean } }) => state.user.isLoggedIn)
    const role = useSelector((state: { user: { role: string } }) => state.user.role)


    console.log(role)

    const HandleLogout = () => {
        dispatch(logout())
    }

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
                        <li className="cursor-pointer hover:text-blue-300 font-semibold"><Link to='/products'>Products</Link></li>
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
                        isLogged ? (
                            role === 'admin' ? (
                                <div className='relative group'>
                                    <div className='flex gap-x-2 items-center cursor-default'>
                                        <p>{username}</p>    
                                        <button onClick={() => setMenu(!menu)}>{<UserCircleIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' />}</button>
                                    </div>
                                    <div className={`${menu ? "absolute mt-2 w-30 right-1 top-6 shadow bg-white border opacity-0 scale-95 rounded-lg z-1 animate-dropdown-open" : "absolute mt-2 w-30 right-1 top-6  opacity-100 scale-100 bg-white border rounded-lg z-1 animate-dropdown-close"}`}>
                                        <Link to='/admin_dashboard' className='block hover:bg-gray-200 text-center rounded-t-lg'>Dashboard</Link>
                                        <button onClick={HandleLogout} className='w-full text-center hover:bg-gray-200 rounded-b-lg cursor-pointer'>Sign out</button>
                                    </div>
                                </div>
                            ) : (
                                <div className='relative group'>
                                    <div className='flex gap-x-2 items-center cursor-default'>
                                        <p>{username}</p>    
                                        <button onClick={() => setMenu(!menu)}>{<UserCircleIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' />}</button>
                                    </div>
                                    <div className={`${menu ? "absolute mt-2 w-30 right-1 top-6 shadow bg-white border opacity-0 scale-95 rounded-lg z-1 animate-dropdown-open" : "absolute mt-2 w-30 right-1 top-6  opacity-100 scale-100 bg-white border rounded-lg z-1 animate-dropdown-close"}`}>
                                        <Link to='/profile' className='block hover:bg-gray-200 text-center rounded-t-lg'>Profile</Link>
                                        <button onClick={HandleLogout} className='w-full text-center hover:bg-gray-200 rounded-b-lg cursor-pointer'>Sign out</button>
                                    </div>
                                </div>
                            )
                        ) : (
                            <div className='relative group'>
                                <div className='flex gap-x-2 items-center cursor-default'>
                                    <p>Guest</p>    
                                    <button onClick={() => setMenu(!menu)}>{<UserCircleIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' />}</button>
                                </div>
                                <div className={`${menu ? "absolute mt-2 w-30 right-1 top-6 shadow bg-white border opacity-0 scale-95 rounded-lg z-1 animate-dropdown-open" : "absolute mt-2 w-30 right-1 top-6  opacity-100 scale-100 bg-white border rounded-lg z-1 animate-dropdown-close"}`}>
                                    <Link to='/login' className='block hover:bg-gray-200 text-center rounded-t-lg'>Login</Link>
                                    <Link to='/register' className='block hover:bg-gray-200 text-center rounded-b-lg'>Sign up</Link>
                                </div>
                            </div>
                        )
                    }
                    <Link to='/cart'><ShoppingCartIcon className='w-8 h-8 cursor-pointer hover:text-blue-300' /></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;