import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Guest',
        password: '',
        isLogged: false,
        role: ''
    },
    reducers: {
        setUsername : state => {
            state.username = 'Hanarashi'
        },
        setisLogged: state => {
            state.isLogged = true
        }
    }
});


export const { setUsername } = userSlice.actions

export default userSlice.reducer