import Image from 'next/image'

function Services() {
    return (
        <div className='mt-56 max-w-screen-xl mx-auto space-y-5'>
            <p className='text-secondary text-lg'>Our Service</p>
            <h3 className='text-primary text-[40px]'>Services We <span className='font-bold'>Offering</span></h3>
            <div className='flex items-center justify-between'>
                <div className='bg-background h-[500px] w-[400px] p-4 rounded-lg shadow-xl relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <span className='absolute top-0 right-0 bg-secondary h-32 w-32 rounded-tr-2xl rounded-bl-[75px] rounded-tl-[48px] rounded-br-[48px]'>
                        <Image src="/announcement.png" height={75} width={75} alt="announcement" className='absolute top-8 left-10' />
                    </span>
                    <div className='absolute bottom-0 flex flex-col items-left pb-10'>
                        <h3 className='font-bold text-[32px] text-primary'>Social Media Analysis</h3>
                        <p className='text-justify text-gray-500 text-lg pr-1'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </p>
                    </div>
                </div>
                <div className='bg-background h-[500px] w-[400px] p-4 rounded-lg shadow-xl relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <span className='absolute top-0 right-0 bg-secondary h-32 w-32 rounded-tr-2xl rounded-bl-[75px] rounded-tl-[48px] rounded-br-[48px]'>
                        <Image src="/stats.png" height={75} width={75} alt="announcement" className='absolute top-8 left-10' />
                    </span>
                    <div className='absolute bottom-0 flex flex-col items-left pb-10'>
                        <h3 className='font-bold text-[32px] text-primary'>Business growth</h3>
                        <p className='text-justify text-gray-500 text-lg pr-1'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </p>
                    </div>
                </div>
                <div className='bg-background h-[500px] w-[400px] p-4 rounded-lg shadow-xl relative cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                    <span className='absolute top-0 right-0 bg-secondary h-32 w-32 rounded-tr-2xl rounded-bl-[75px] rounded-tl-[48px] rounded-br-[48px]'>
                        <Image src="/session.png" height={75} width={75} alt="announcement" className='absolute top-8 left-10' />
                    </span>
                    <div className='absolute bottom-0 flex flex-col items-left pb-10'>
                        <h3 className='font-bold text-[32px] text-primary'>Investor in people</h3>
                        <p className='text-justify text-gray-500 text-lg pr-1'>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services