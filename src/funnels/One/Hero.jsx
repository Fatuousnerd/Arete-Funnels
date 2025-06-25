import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='lg:h-screen w-screen bg-[url(./pic2.jpg)] object-cover lg:p-[100px] pb-[20px] relative'>
                <div className="flex absolute top-[25px] left-[50px] items-center">
                    <img src="./vite.svg" alt="Logo" />
                    <h1 className='text-3xl font-bold text-white ml-2'>Arete Funnels</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-[70px] pt-[100px] overflow-x-hidden '>
                    <h1 className='text-[4rem] leading-[4rem] lg:text-[5.5rem] lg:leading-[5.75rem] font-extrabold text-white text-center pl-[100px] pr-[100px]'>Lose the weight and gain the confidence with Jari Maureen.</h1>
                    <button className='bg-[#d6f39e] text-[#212529] p-[10px] pr-[30px] pl-[30px] rounded-lg border-[#212529] border-solid border-[1.5px] outline-none uppercase font-extrabold hover:bg-[--SecTextColor]  transition duration-300'>Get Started</button>
                </div>
            </div>
        </>
    )
}

export default Hero