import React from 'react'

const OfferOne = () => {
    return (
        <>
            <div className='lg:h-screen w-screen bg-[#e6e1ff] text-[#212529] flex flex-col md:flex-row lg:flex-row items-center justify-center p-[25px] lg:p-[100px] gap-[100px] '>
                <div className="flex flex-col w-11/12 lg:w-6/12 items-start gap-[30px]">
                    <h2 className='font-extrabold text-[3rem] '>Health Coaching</h2>
                    <p className='text-xl font-light'>Use this space to highlight your most popular services. You can also use this for your flagship products.</p>
                    <button className='bg-[#ffacec] text-[#212529] p-[10px] pr-[30px] pl-[30px] rounded-lg border-[#212529] border-solid border-[1.5px] outline-none uppercase font-extrabold hover:bg-[--SecTextColor]  transition duration-300'>Consult Now</button>
                </div>
                <div className="w-11/12 lg:w-6/12 h-full border-[#ffacec] border-solid border-[2px] rounded-[20px] overflow-hidden">
                    <img src="./pic1.jpg" alt="" className='object-cover w-full h-full' />
                </div>
            </div>
        </>
    )
}

export default OfferOne