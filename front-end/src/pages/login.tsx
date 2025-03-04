import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

const login = () => {

    const handleLogin = () => {

    }

    return (
        <main className="w-screen h-full flex justify-center items-center">
            <div className="w-[580px] h-[518px] font-[Roboto] rounded-[8px] flex flex-col justify-center items-center py-4 space-y-6 shadow-lg">
                <div className="text-center space-y-1.5">
                    <h1 className="text-6xl font-bold">Log in</h1>
                    <p className="text-base font-bold">Access your Nexora account now!</p>
                </div>
                <div>
                    <form action="" className="space-y-2">
                        <div className="space-y-1 relative" >
                            <label htmlFor="email" className="block text-base font-bold">Email Adress</label>
                            <input id='email' type="text" className="border block w-[468px] h-[48px] px-2 rounded-[2px] shadow-sm" placeholder="youremail@example.com"/>
                            <MdEmail className="absolute top-11 right-10 w-[20px] h-[20px]" />
                        </div>
                        <div className="space-y-1 relative">
                            <label htmlFor="password" className="block text-base font-bold">Password</label>
                            <input type="password" id='password' className="border block w-[468px] h-[48px] px-2 rounded-[2px] shadow-sm" placeholder="***********" />
                            <FaLock className="absolute right-10 top-11" />
                        </div>
                    </form>
                </div>
                <div className="w-[580px] flex justify-between px-14">
                    <div>
                        <label htmlFor="remember" className="font-bold text-[20px]">Remember me?</label>
                        <input id='remember' type="checkbox" className="w-[16px] h-[16px] ml-2" />
                    </div>
                    <div className="mr-4">
                        <a className="font-bold"><Link to='/forgot_password'>Forgot password?</Link></a>
                    </div>
                </div>
                <div className="space-y-2">
                    <button onClick={handleLogin} className="w-[468px] h-[48px] bg-black text-white text-base font-bold cursor-pointer rounded-[2px]">Login</button>
                    <div className="text-center">
                        <p>Don't have an account? <a className="font-bold underline"><Link to='/register'>Sign up</Link></a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default login;