
function Header() {
    return (
        <header className='bg-background'>
            <div className='max-w-screen-xl mx-auto flex items-center justify-between p-8 space-x-4'>
                <h1 className='text-2xl text-primary font-bold cursor-pointer'>dorik</h1>
                <div className='flex items center space-x-8'>
                    <p className='text-gray-400 cursor-pointer'>Home</p>
                    <p className='text-gray-400 cursor-pointer'>Why Us</p>
                    <p className='text-gray-400 cursor-pointer'>Services</p>
                    <p className='text-gray-400 cursor-pointer'>Testimonials</p>
                    <p className='text-gray-400 cursor-pointer'>Pricing</p>
                </div>
                <button className='text-md text-white rounded-2xl bg-secondary p-3'>Free Quote</button>
            </div>
        </header>
    )
}

export default Header