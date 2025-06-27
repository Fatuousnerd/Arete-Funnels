import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className='lg:h-screen w-screen flex flex-col lg:flex-row justify-center items-center gap-[100px] p-[25px] lg:p-[50px] '>
                <div className="flex rounded-t-[300px] overflow-hidden border-solid border-[2px] border-[#eb6200] w-full lg:w-5/12 h-full">
                    <img src="/pregnant3.jpg" alt="" className='h-full w-full object-cover ' />
                </div>
                <div className="flex flex-col w-full lg:w-7/12 h-full justify-between ">
                    <h2 className='text-[3.5rem] leading-[3.5rem] font-light capitalize mb-[50px] lg:mb-0 font-[Libre-Caslon-Text] '>The Mom Seal of approval</h2>
                    <div className="flex flex-col gap-[15px] ">
                        <div className="flex flex-col gap-[5px]">
                            <p className='font-[Inter] text-justify'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                            <h3 className='font-[Inter] font-extrabold'>Hannah Elmore</h3>
                        </div> <hr className='border-[#eb6200] rounded-full border-solid border-[2px] '/>
                        <div className="flex flex-col gap-[5px]">
                            <p className='font-[Inter] text-justify'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                            <h3 className='font-[Inter] font-extrabold'>Hannah Elmore</h3>
                        </div> <hr className='border-[#eb6200] rounded-full border-solid border-[2px] '/>
                        <div className="flex flex-col gap-[5px]">
                            <p className='font-[Inter] text-justify'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                            <h3 className='font-[Inter] font-extrabold'>Hannah Elmore</h3>
                        </div> <hr className='border-[#eb6200] rounded-full border-solid border-[2px] '/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials