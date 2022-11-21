import Image from 'next/image'

function CaseStudies() {
    return (
        <div className='mt-56 max-w-screen-xl mx-auto'>
            <p className='text-secondary text-lg'>Case Studies</p>
            <h3 className='text-primary text-[40px]'>See our recent <span className='font-bold'>works</span></h3>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='relative h-[300px] w-[300px] rounded-2xl'>
                        <Image src="/case-1.jpg" layout="fill" className='rounded-2xl' alt="case 1" />
                    </div>
                </div>
                <div>
                    <div className='relative h-[300px] w-[600px] rounded-2xl'>
                        <Image src="/case-2.jpg" layout="fill" className='rounded-2xl' alt="case 2" />
                    </div>
                </div>
                <div>
                    <div className='relative h-[300px] w-[300px] rounded-2xl'>
                        <Image src="/case-3.jpg" layout="fill" className='rounded-2xl' alt="case 3" />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between mt-10'>
                <div>
                    <div className='relative h-[300px] w-[300px] rounded-2xl'>
                        <Image src="/case-4.jpg" layout="fill" className='rounded-2xl' alt="case 4" />
                    </div>
                </div>
                <div>
                    <div className='relative h-[300px] w-[400px] rounded-2xl'>
                        <Image src="/case-5.jpg" layout="fill" className='rounded-2xl' alt="case 5" />
                    </div>
                </div>
                <div>
                    <div className='relative h-[300px] w-[300px] rounded-2xl'>
                        <Image src="/case-6.jpg" layout="fill" className='rounded-2xl' alt="case 6" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies