

const Footer = () => {
    return (
        <footer className='font-[Roboto] px-8 flex'>
            <div className="flex flex-col w-fit gap-y-1">
                <h2 className='text-2xl font-semibold'>Contact Us</h2>
                <a href="https://www.facebook.com/huy.le.770247?locale=vi_VN" className="text-blue-400">Via Facebook</a>
                <a href="https://www.instagram.com/lhuy06/" className="text-blue-400">Via Instagram</a>
                <div className="space-x-2">
                    <label htmlFor="email">Via Email</label>
                    <input type="email" placeholder='Your Email Adress' className="border w-60 h-10 px-2 rounded-lg"/>
                    <button className="border w-20 rounded-lg text-white bg-blue-500 hover:bg-blue-600 cursor-pointer h-10">Send</button>
                </div>
            </div>
            <div>
                <h1>Nexora</h1>
            </div>
        </footer>
    )
}

export default Footer;