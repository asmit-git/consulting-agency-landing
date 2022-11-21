import React from 'react'

function Footer() {
    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2020 ? "2020" : "2020 - " + currentYear

    return (
        <div className='bg-background'>
            <div className='max-w-screen-xl mx-auto mt-24 p-8'>
                <div className='grid grid-cols-4'>
                    <div className='col-span-2'>
                        <h2 className='text-primary text-[40px]'>Do you have any questions?</h2>
                        <h2 className='text-primary text-[40px]'>Feel free to <span className='font-bold'>contact us</span></h2>
                    </div>
                    <div className='col-span-2'>
                        <button className='text-md text-white rounded-3xl bg-secondary p-6 font-medium w-[250px]'>Contact Us</button>
                    </div>
                </div>
                <div className='mt-32 grid grid-cols-5'>
                    <div className='col-span-2 flex flex-col'>
                        <h2 className='text-primary text-[56px] font-bold'>dorik</h2>
                        <p className='text-justify text-gray-500 text-lg leading-8 w-3/4'>Again and he smaller in a extent, that this to a the impenitratable are ruining a belief</p>
                    </div>
                    <div className='col-span-1 flex flex-col'>
                        <h3 className='text-primary text-[28px] font-medium'>Contact us</h3>
                        <span className='text-gray-600 text-[18px] font-normal mt-4'>+977-123456789</span>
                        <h3 className='text-primary text-[28px] font-medium mt-10'>Office</h3>
                        <span className='text-gray-600 text-[18px] font-normal mt-4'>Maitidevi,30 Kathmandu Nepal</span>
                    </div>
                    <div className='col-span-1 flex flex-col'>
                        <h3 className='text-primary text-[28px] font-medium'>Product</h3>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Features</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Why Us</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Pricing</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>FAQs</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Team</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Case Study</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Privacy</span>
                    </div>
                    <div className='col-span-1 flex flex-col'>
                        <h3 className='text-primary text-[28px] font-medium'>Resources</h3>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Contact</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Terms & conditions</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Help Center</span>
                        <span className='text-gray-600 text-[18px] font-normal mt-2 cursor-pointer'>Locations</span>
                    </div>
                </div>
            </div>
            <div className='w-full bg-secondary text-white content-center text-center'>
            © { yearTxt } - Developed by Asmit Gautam
            </div>
        </div>
    )
}

export default Footer