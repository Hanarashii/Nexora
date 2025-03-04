import { Link } from "react-router-dom";

const register = () => {
    return (
        <main className="w-screen h-full flex justify-center items-center font-[Roboto]">
            <div className="w-[580px] h-[670px] flex flex-col justify-center items-center space-y-6 py-4 shadow-lg">
                <div className="text-center">
                    <h1 className="font-bold text-6xl">Sign Up</h1>
                    <p className="font-bold text-base">Get your Nexora account now!</p>
                </div>
                <div>
                    <form action="" className="space-y-2">
                        <div>
                            <label htmlFor="username" className="block font-bold">Username</label>
                            <input type="text" id='username' className="w-[468px] h-[48px] border rounded-[2px] block shadow-lg px-2" placeholder="exmapleusername"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-bold">Email Adress</label>
                            <input type="text" id='email' className="w-[468px] h-[48px] border rounded-[2px] block shadow-lg px-2"  placeholder="youremail@example.com"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block font-bold">Password</label>
                            <input type="password" id='password' className="w-[468px] h-[48px] border rounded-[2px] block shadow-lg px-2" placeholder="*********"/>
                        </div>
                        <div>
                            <label htmlFor="confirm_password" className="block font-bold">Confirm Password</label>
                            <input type="password" id='confirm_password' className="w-[468px] h-[48px] border rounded-[2px] block shadow-lg px-2" placeholder="*********"/>
                        </div>
                    </form>
                </div>
                <div className="mt-4 space-y-2">
                    <button className="w-[468px] h-[48px] bg-black text-white font-bold">Sign Up</button>
                    <div className="text-center">
                        <p>Already have an account? <a className="font-bold underline"><Link to='/login'>Login</Link></a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default register;