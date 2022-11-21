import Image from "next/image"
import { AiOutlinePlusCircle ,AiOutlineMinusCircle} from "react-icons/ai"

function Faq() {
    return (
        <div className='mt-56 max-w-screen-xl mx-auto space-y-5'>
            <div className="grid grid-cols-4">
                <div className="col-span-2">
                    <p className='text-secondary text-lg'>FAQs</p>
                    <h3 className='text-primary text-[40px]'>Tell us your <span className='font-bold'>questions</span></h3>
                    <p className='mt-5 text-justify text-gray-500 text-lg leading-8 w-[400px]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                    </p>
                    <div className="mt-10 flex flex-col items-start space-y-8">
                        <div className="bg-background border-2 border-solid p-6 rounded-xl w-3/4 flex items-center justify-between cursor-pointer">
                            <p className="text-[24px] text-primary font-medium">Bonus Plugins included? </p><span><AiOutlinePlusCircle size={32} className="text-primary" /></span>
                        </div>
                        <div className="bg-background border-2 border-solid p-6 rounded-xl w-3/4 flex items-center justify-between cursor-pointer">
                            <p className="text-[24px] text-primary font-medium">Can you help my business grow ? </p><span><AiOutlinePlusCircle size={32} className="text-primary" /></span>
                        </div>
                        <div>
                            <div className="bg-background border-2 border-solid p-6 rounded-xl w-3/4 cursor-pointer space-y-2">
                                <div className="flex items-center justify-between ">
                                    <p className="text-[24px] text-primary font-medium">What are your best interest rates ? </p><span><AiOutlineMinusCircle size={32} className="text-primary" /></span>
                                </div>
                                <p className="text-justify text-gray-500 text-lg leading-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className='relative bg-primary h-[600px] w-[450px] p-4 rounded-2xl'>
                        <Image src="/faq.jpg" width={400} height={800} className="z-0 absolute top-[-50px] left-[-50px] rounded-2xl" alt="banner image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq