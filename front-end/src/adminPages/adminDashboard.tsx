import * as React from 'react';
import { LineChart } from "@mui/x-charts"
import SidebarButton from '../components/sidebarButton'
import { BarChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts';

const AdminDashboard = () => {

    const sampleData = [2, 4, 6, 8, 10]
    const xaxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <main className="flex font-[Roboto] h-dvh">
                <SidebarButton />
                <div className="ml-10 flex p-4 border rounded-lg">
                    <div className="w-sm h-fit flex flex-col justify-center items-center border shadow-sm rounded-lg">
                        <h1 className="font-semibold text-3xl">Total Earnings</h1>
                        <LineChart
                            xAxis={[{data: [1, 2, 3, 4, 5]}]}
                            series={[
                            {
                                data: [2, 3, 6, 5, 10]
                            }
                        ]}
                        width={400}
                        height={200}
                        />
                    </div>
                    <div className="w-sm h-fit ml-4 flex flex-col justify-center items-center border shadow-sm rounded-lg">
                        <h1 className="font-semibold text-3xl">Top selling products</h1>
                        <PieChart
                        series={[{
                            data: [
                                {id: 0, value: 20, label: 'Laptops'},
                                {id: 1, value: 15, label: 'Hardwares'},
                                {id: 2, value: 10, label: 'Displays'},
                                {id: 3, value: 15, label: 'Accesories'}
                            ],
                            outerRadius: 80,
                        }]}
                        width={400}
                        height={200}
                        />
                    </div>
                    <div className="w-sm h-fit ml-4 flex flex-col justify-center items-center border shadow-sm rounded-lg">
                        <h1 className="font-semibold text-3xl">Top Selling Products</h1>
                        <BarChart
                        xAxis={[{scaleType:'band', data:['Product A', 'Product B', 'Product C']}]}
                        series={[{data: [5,4,3]}]}
                        width={400}
                        height={200}
                         />
                    </div>
                    <div>

                    </div>
                </div>

        </main>
    )
}

export default AdminDashboard