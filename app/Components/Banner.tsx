import Image from 'next/image'

function Banner() {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-4 h-[800px]'>
                <div className='col-span-2 flex-col items-center mt-56'>
                    <h1 className='text-[56px] text-primary'>Connecting people <span className='font-bold'>Around the world</span></h1>
                    <button className='text-md text-white rounded-2xl bg-secondary p-4 font-semibold mt-20'>Get Started</button>
                    <div className='mt-20'>
                        <p className='text-gray-500 mb-4'>Liscensed and business secured counselor</p>
                        <p className='text-gray-500 mb-4'>Always private and secure your privacy</p>
                        <p className='text-gray-500 mb-4'>Professional and passionate counselor</p>
                    </div>
                </div>
                <div className='col-span-2 mt-24'>
                    <div className='relative bg-primary h-[800px] w-[600px] p-4 rounded-2xl'>
                        <Image src="/banner-img.jpg" height={600} width={400} className="z-0 absolute top-24 left-24 rounded-xl" alt="banner image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner