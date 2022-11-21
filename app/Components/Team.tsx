import Image from 'next/image'

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Team() {
    return (
        <div className='mt-56 max-w-screen-xl mx-auto'>
            <p className='text-secondary text-lg'>Our Experts</p>
            <h3 className='text-primary text-[40px]'>Our awesome <span className='font-bold'>team</span></h3>
            <div className='flex items-center justify-between mt-20'>
                <div className='bg-background h-[350px] w-[300px] p-6 shadow-xl rounded-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <h3 className='text-primary text-[24px] font-bold'>Arlene McCoy</h3>
                    <p className='text-gray-600 text-[18px]'>Associate Consultant</p>
                    <div className='flex flex-col mt-20 space-y-2'>
                        <div className='relative w-[100px] h-[100px] rounded-full'>
                            <Image src="/team-1.png" width={150} height={200} alt="team-4" className='rounded-full' />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsFacebook />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsInstagram />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsLinkedin />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsTwitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-background h-[350px] w-[300px] p-6 shadow-xl rounded-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <h3 className='text-primary text-[24px] font-bold'>Jerome Bell</h3>
                    <p className='text-gray-600 text-[18px]'>App Developer</p>
                    <div className='flex flex-col mt-20 space-y-2'>
                        <div className='relative w-[100px] h-[100px] rounded-full'>
                            <Image src="/team-2.png" width={150} height={200} alt="team-4" className='rounded-full' />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsFacebook />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsInstagram />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsLinkedin />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsTwitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-background h-[350px] w-[300px] p-6 shadow-xl rounded-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <h3 className='text-primary text-[24px] font-bold'>Lesie Alexandar</h3>
                    <p className='text-gray-600 text-[18px]'>Support</p>
                    <div className='flex flex-col mt-20 space-y-2'>
                        <div className='relative w-[100px] h-[100px] rounded-full'>
                            <Image src="/team-3.png" width={150} height={200} alt="team-4" className='rounded-full' />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsFacebook />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsInstagram />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsLinkedin />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsTwitter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-background h-[350px] w-[300px] p-6 shadow-xl rounded-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <h3 className='text-primary text-[24px] font-bold'>Bessie Cooper</h3>
                    <p className='text-gray-600 text-[18px]'>Project Manager</p>
                    <div className='flex flex-col mt-20 space-y-2'>
                        <div className='relative w-[100px] h-[100px] rounded-full'>
                            <Image src="/team-4.png" width={150} height={200} alt="team-4" className='rounded-full' />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsFacebook />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsInstagram />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsLinkedin />
                            </div>
                            <div className='bg-secondary h-8 w-8 rounded-lg text-white content-center p-2'>
                                <BsTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team