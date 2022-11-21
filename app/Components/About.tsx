import Image from 'next/image'

function About() {
    return (
        <div className='mt-56 max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-5'>
                <div className='col-span-3'>
                    <p className='text-secondary text-lg'>Who We Are ?</p>
                    <h3 className='text-primary text-[40px]'>We unlock <span className='font-bold'>Potential</span></h3>
                    <p className='mt-5 text-justify text-gray-500 text-lg leading-8 w-[400px]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                    </p>
                    <button className='text-md text-white rounded-2xl bg-secondary p-4 font-semibold mt-10'>Get Started</button>
                    <div className='relative bg-primary h-[300px] w-[500px] p-4 rounded-2xl mt-24'>
                        <Image src="/about-2.jpg" width={450} height={450} className="z-0 absolute top-[-50px] left-[-50px] rounded-2xl" alt="banner image" />
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='relative bg-primary h-[600px] w-[450px] p-4 rounded-2xl'>
                        <Image src="/about-1.jpg" width={400} height={400} className="z-0 absolute top-[-50px] left-[-50px] rounded-2xl" alt="banner image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About