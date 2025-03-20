import { Link } from "react-router-dom"
import { LineChart } from '@mui/x-charts/LineChart';

const AdminDashboard = () => {
    return (
        <main className="flex font-[Roboto] h-dvh">
            <nav className="border w-60 bg-white">
                <ul className="flex flex-col justify-center space-y-2">
                    <Link to='/admin_dashboard'><li className="border p-2 w-full h-10 hover:bg-gray-200 text-lg">Home</li></Link>
                    <Link to='/product_manage'><li className="">Products</li></Link>
                    <Link to='/order_manage'><li>Orders</li></Link>
                    <Link to='/user_manage'><li>Users</li></Link>
                </ul>
            </nav>
            <div>
                <div>
                    <h1 className="font-bold">Total Earnings</h1>
                    {/* <LineChart>
                    
                    </LineChart> */}
                </div>
            </div>
        </main>
    )
}

export default AdminDashboard