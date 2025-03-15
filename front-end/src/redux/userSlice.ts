import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'Guest',
        password: '',
        isLoggedIn: false,
        role: 'customer',
    },
    reducers: {
        login: (state, action) => {
            const { username, role } = action.payload;
            state.username = username;
            state.isLoggedIn = true;
            state.role = role;
        },
        logout: state => {
            state.username = 'Guest';
            state.isLoggedIn = false;
            state.role = 'customer';
        }
    }
});


export const { login, logout } = userSlice.actions

export default userSlice.reducer