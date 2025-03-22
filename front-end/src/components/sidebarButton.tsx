import { useSelector,useDispatch } from "react-redux"
import { GrFormPrevious,GrFormNext } from "react-icons/gr"
import { setSidebar } from "../redux/sidebarSlice"
import RootState from "../type/rootstate"

const sidebarButton = () => {

    const sidebar = useSelector((state : RootState) => state.sidebar)
    const dispatch = useDispatch()

    return(
    <div className="h-dvh relative">
    {
        sidebar.isOpened ? (
            <button onClick={() => dispatch(setSidebar())} className="text-2xl border cursor-pointer">{<GrFormPrevious/>}</button>
        ) : (
            <button onClick={() => dispatch(setSidebar())} className="text-2xl border cursor-pointer">{<GrFormNext />}</button>
        )
    }
    </div>)
}

export default sidebarButton