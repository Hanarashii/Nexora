import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email,setEmail] = useState('');

    const PostAPI = async() => {
        try {
            const res = await fetch('http://localhost:3000/users/register',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                username: username,
                email: email,
                role: 'customer',
                password: password,
                })
            })
            const response = await res.json();
            console.log(response);
        }
        catch (err) {
            console.error(err);
        }
    }

    const HandleRegister = () => {
        if(password !== confirmPassword) alert('Passwords does not match!');
        else if (username === '' || email === '' || password === '') alert('You must fill the form!');
        else {
        PostAPI();
    }
    }

    return (
        <main className="flex justify-center items-center font-[Roboto]">
            <div className="border flex flex-col h-fit justify-center items-center my-14  gap-y-4 p-8 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                    <h1 className="font-bold text-6xl">Sign up</h1>
                    <p className="font-semibold text-lg">Greetings, welcome to the page!</p>
                </div>
                {/*Username and Password*/}
                <form className="flex flex-col gap-y-2">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="border w-sm h-10 rounded-sm px-2"/>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Adress' className='border w-sm h-10 rounded-sm px-2' />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="border w-sm h-10 rounded-sm px-2"/>
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' className='border w-sm h-10 rounded-sm px-2' />
                </form>

                {/*Buttons and others*/}
                <div className="flex flex-col">
                    <button onClick={HandleRegister} type='submit' className="border w-2xs h-10 rounded-lg bg-black text-white cursor-pointer">Sign up</button>    
                </div>
                <div className="flex flex-col gap-y-2">
                    <button className="border h-10 w-60 flex items-center px-4 rounded-lg cursor-pointer"><img src={Google} className='w-8 h-8' alt="" />Continue with Google</button>
                    <button className="border h-10 w-60 flex items-center px-4 rounded-lg cursor-pointer"><img src={Facebook} className='w-7 h-7 mr-1' alt="" />Continue with Facebook</button>
                </div>
                <div>
                    <p>Already have an account? <Link to='/login'><a href="#" className='underline hover:text-blue-300'>Log in.</a></Link></p>
                </div>
            </div>
        </main>
    )
}

export default Register;