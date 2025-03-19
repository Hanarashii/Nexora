import { createSlice } from "@reduxjs/toolkit";


const userData = (JSON.parse(localStorage.getItem('user') || '') || {
    id: 0,
    name: 'Guest',
    password: '',
    isLoggedIn: false,
    role: 'customer',
})

export const userSlice = createSlice({
    name: 'user',
    initialState: userData,
    reducers: {
        login: (state, action) => {
            const { id, username, role } = action.payload;
            state.id = id;
            state.username = username;
            state.isLoggedIn = true;
            state.role = role;
            localStorage.setItem('user', JSON.stringify(state))
        },
        logout: state => {
            state.username = 'Guest';
            state.isLoggedIn = false;
            state.role = 'customer';
            localStorage.removeItem('user')
        }
    }
});


export const { login, logout } = userSlice.actions

export default userSlice.reducer