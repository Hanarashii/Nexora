import { useSelector, useDispatch } from "react-redux"
import * as React from 'react';
import RootState from "../type/rootstate"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { setSidebar } from "../redux/sidebarSlice"
import { LineChart } from "@mui/x-charts"

const AdminDashboard = () => {

    const sidebar = useSelector((state: RootState) => state.sidebar)
    const dispatch = useDispatch()

    const sampleData = [2, 4, 6, 8, 10]
    const xaxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <main className="flex font-[Roboto] h-dvh">
                <div className="h-dvh relative">
                    {
                        sidebar.isOpened ? (
                            <button onClick={() => dispatch(setSidebar())} className="text-2xl border">{<GrFormPrevious/>}</button>
                        ) : (
                            <button onClick={() => dispatch(setSidebar())} className="text-2xl border">{<GrFormNext />}</button>
                        )
                    }
                </div>
                <div className="ml-10 p-4 border rounded-lg">
                    <div className="w-sm flex flex-col justify-center items-center border shadow-sm rounded-lg">
                        <h1 className="font-semibold text-3xl">Total Earnings</h1>
                        <LineChart
                            xAxis={[{data: [1, 2, 3, 4, 5]}]}
                            series={[
                            {
                                data: [2, 3, 6, 5, 10]
                            }
                        ]}
                        width={400}
                        height={300}
                        />
                    </div>
                    <div>

                    </div>
                </div>

        </main>
    )
}

export default AdminDashboard