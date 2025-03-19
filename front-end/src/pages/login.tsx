import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { login } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const HandleLogin = async() => {
        if (username === '' || password === '') alert('You must fill the form')
        else {
            try {
                const res = await fetch('http://localhost:3000/users/login',{
                    method: 'POST',
                    headers: {'Content-Type' : 'application/json'},
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                })
                const response = await res.json();
                if (response.status === 'failed') {
                    alert(response.message)
                }
                else {
                    const id = response[0].id
                    const role = response[0].role;
                    dispatch(login({ id, username, role }))
                }
            }
            catch (err) {
                console.error(err);
            }
        };
    }

    return (
        <main className="flex justify-center items-center font-[Roboto]">
            <div className="border flex flex-col h-fit justify-center items-center my-26 gap-y-4 p-8 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                    <h1 className="font-bold text-6xl">Login</h1>
                    <p className="font-semibold text-lg">Welcome back!</p>
                </div>
                {/*Username and Password*/}
                <form className="flex flex-col gap-y-2">
                    <input onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Username" className="border w-sm h-10 rounded-sm px-2"/>
                    <input onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" className="border w-sm h-10 rounded-sm px-2"/>
                </form>

                <div className="flex justify-between gap-x-34">
                    <div>
                        <input type="checkbox" id='remember'/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                        <a href='#' className='hover:text-blue-300'>Forgot Password?</a>
                    </div>
                </div>

                {/*Buttons and others*/}
                <div className="flex flex-col">
                    <button onClick={HandleLogin} type='submit' className="border w-2xs h-10 rounded-lg bg-black text-white cursor-pointer">Sign in</button>    
                </div>
                <div className="flex flex-col gap-y-2">
                    <button className="border h-10 w-60 flex items-center px-4 rounded-lg cursor-pointer"><img src={Google} className='w-8 h-8' alt="" />Continue with Google</button>
                    <button className="border h-10 w-60 flex items-center px-4 rounded-lg cursor-pointer"><img src={Facebook} className='w-7 h-7 mr-1' alt="" />Continue with Facebook</button>
                </div>
                <div>
                    <p>Don't have an account? <Link to='/register'  className='underline hover:text-blue-300'>Sign up.</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Login;