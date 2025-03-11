import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <main className="flex justify-center items-center font-[Roboto]">
            <div className="border flex flex-col h-fit justify-center items-center my-14  gap-y-4 p-8 rounded-lg shadow-xl">
                <div className="text-center mb-6">
                    <h1 className="font-bold text-6xl">Sign up</h1>
                    <p className="font-semibold text-lg">Greetings, welcome to the page!</p>
                </div>
                {/*Username and Password*/}
                <form className="flex flex-col gap-y-2">
                    <input type="text" placeholder="Username" className="border w-sm h-10 rounded-sm px-2"/>
                    <input type="email" placeholder='Email Adress' className='border w-sm h-10 rounded-sm px-2' />
                    <input type="password" placeholder="Password" className="border w-sm h-10 rounded-sm px-2"/>
                    <input type="password" placeholder='Confirm Password' className='border w-sm h-10 rounded-sm px-2' />
                </form>

                {/*Buttons and others*/}
                <div className="flex flex-col">
                    <button type='submit' className="border w-2xs h-10 rounded-lg bg-black text-white cursor-pointer">Sign in</button>    
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