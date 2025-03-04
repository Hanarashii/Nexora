import { Link,useLocation } from "react-router-dom";
import { FaLaptop } from "react-icons/fa6";

const navbar = () => {

    const location = useLocation();
    
    return (
        <header className="w-screen h-[72px] border-b-[1px] py-3 px-2">
            <nav className="flex justify-between items-center">
                <div className="flex">
                    <FaLaptop className="w-[40px] h-[40px] mr-2" />
                    <Link to='/'><h1 className="font-bold font-[Roboto] text-[30px]">Nexora</h1></Link>
                </div>
                <div className="font-[Roboto]">
                    <ul className="flex gap-x-8 text-xl">
                        <li className={`${location.pathname === '/' ? 'underline font-bold' : ''}`}><Link to='/'>Home</Link></li>
                        <li className={`${location.pathname === '/products' ? 'underline font-bold' : ''}`}><Link to='/products'>Products</Link></li>
                        <li className={`${location.pathname === '/about_us' ? 'underline font-bold' : ''}`}><Link to='/about_us'>About Us</Link></li>
                        <li className={`${location.pathname === '/contact' ? 'underline font-bold' : ''}`}><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="font-[Roboto] text-[20px] space-x-4 drop-down">
                    <button className="border w-[100px] h-[40px] rounded-[5px] bg-black text-white"><Link to='/login'>Login</Link></button>
                    <button className="border w-[100px] h-[40px] rounded-[5px] bg-black text-white"><Link to='/register'>Sign Up</Link></button>
                </div>
            </nav>
        </header>
    )
}

export default navbar;