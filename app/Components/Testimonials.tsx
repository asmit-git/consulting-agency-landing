import Image from "next/image"

function Testimonials() {
    return (
        <div className='mt-56 max-w-screen-xl mx-auto space-y-5'>
            <p className='text-secondary text-lg'>Testimonials</p>
            <h3 className='text-primary text-[40px]'>Our Happy <span className='font-bold'>Clients</span></h3>
            <div className="relative w-full h-[400px] rounded-3xl">
                <Image src="/testimonials.png" layout="fill" objectFit="contain" alt="testimonials" className="absolute rounded-3xl" />
            </div>
        </div>
    )
}

export default Testimonials