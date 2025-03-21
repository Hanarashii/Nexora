import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import RootState from "../type/rootstate";


const Sidebar = () => {
    const sidebar = useSelector((state : RootState) => state.sidebar)
    return (
    <div className={`${sidebar.isOpened ? "border w-0 h-dvh animate-navbar-toggle-on" : " border w-60 animate-navbar-toggle-off h-dvh"}`}>
            <ul className="flex flex-col justify-center space-y-2">
                <Link to='/admin_dashboard'><li className={`${sidebar.isOpened ? "p-2 text-lg hover:bg-gray-200 animate-navbar-text-on" : "animate-navbar-text-off p-2 text-lg hover:bg-gray-200 animate delay-200" }`}>Home</li></Link>
                <Link to='/product_manage'><li className={`${sidebar.isOpened ? "p-2 text-lg hover:bg-gray-200 animate-navbar-text-on" : "animate-navbar-text-off p-2 text-lg hover:bg-gray-200 animate delay-200" }`}>Products</li></Link>
                <Link to='/order_manage'><li className={`${sidebar.isOpened ? "p-2 text-lg hover:bg-gray-200 animate-navbar-text-on" : "animate-navbar-text-off p-2 text-lg hover:bg-gray-200 animate delay-200" }`}>Orders</li></Link>
                <Link to='/user_manage'><li className={`${sidebar.isOpened ? "p-2 text-lg hover:bg-gray-200 animate-navbar-text-on" : "animate-navbar-text-off p-2 text-lg hover:bg-gray-200 animate delay-200" }`} >Users</li></Link>
            </ul>
    </div>
    )
}

export default Sidebar;