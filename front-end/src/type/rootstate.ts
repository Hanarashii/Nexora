import User from "./user"
import Sidebar from "../type/sidebar"

export default interface RootState {
    user: User,
    sidebar: Sidebar,
}