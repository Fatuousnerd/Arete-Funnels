import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className='lg:h-screen w-screen bg-[#ffffff] text-[#212529] flex flex-col items-center justify-center p-[25px] lg:p-[100px] gap-[50px] '>
                <h2 className='font-extrabold text-[2.5rem] text-center '>Client Testimonials</h2>
                <div className="flex flex-col lg:flex-row w-full justify-around items-center gap-[50px]">
                    <div className="flex flex-col gap-[25px] border-[#fd9f5b] border-solid border-[2px] rounded-[20px] p-[20px]">
                        <img src="./vite.svg" alt="" className='w-[40px] h-[40px] '/>
                        <p>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    </div>
                    <div className="flex flex-col gap-[25px] border-[#adb0ff] border-solid border-[2px] rounded-[20px] p-[20px]">
                        <img src="./vite.svg" alt="" className='w-[40px] h-[40px] '/>
                        <p>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    </div>
                    <div className="flex flex-col gap-[25px] border-[#ffacec] border-solid border-[2px] rounded-[20px] p-[20px]">
                        <img src="./vite.svg" alt="" className='w-[40px] h-[40px] '/>
                        <p>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    </div>
                    <div className="flex flex-col gap-[25px] border-[#96c9ff] border-solid border-[2px] rounded-[20px] p-[20px]">
                        <img src="./vite.svg" alt="" className='w-[40px] h-[40px] '/>
                        <p>"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials