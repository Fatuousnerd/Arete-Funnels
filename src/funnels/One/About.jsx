import React from 'react'

const About = () => {
    return (
        <>
            <div className='lg:h-screen w-screen bg-[#f4f4f2] text-[#212529] flex flex-col md:flex-row lg:flex-row items-center justify-center p-[25px] lg:p-[100px] gap-[100px] '>
                <div className="w-11/12 lg:w-6/12 h-full border-[#212529] border-solid border-[2px] rounded-[20px] overflow-hidden">
                    <img src="./pic1.jpg" alt="" className='object-cover w-full h-full' />
                </div>
                <div className="flex flex-col w-11/12 lg:w-6/12 items-start gap-[30px]"> 
                    <h2 className='font-extrabold text-[5.5rem] '>Hi, I'm Jari!</h2>
                    <p className='text-xl font-light'>This space is perfect for a short backgrounder about the main personality behind your business. Whether it's a fitness guru, a personal trainer or even a celebrity endorser for your fitness routine, this space is perfect for highlighting the face of your company.</p>
                    <button className='bg-[#ffacec] text-[#212529] p-[10px] pr-[30px] pl-[30px] rounded-lg border-[#212529] border-solid border-[1.5px] outline-none uppercase font-extrabold hover:bg-[--SecTextColor]  transition duration-300'>Sign me up</button>
                </div>
            </div>
        </>
    )
}

export default About