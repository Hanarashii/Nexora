import { createSlice } from "@reduxjs/toolkit";

interface sidebarState {
    isOpened: boolean,
}

const initialState: sidebarState = {
    isOpened: true,
}

const sidebarSLice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebar: (state) => {
            state.isOpened = !state.isOpened
        }
    }
})

export const { setSidebar } = sidebarSLice.actions
export default sidebarSLice.reducer