import React from 'react'
import { Link } from 'react-router-dom'

const Offer = () => {
    return (
        <>
            <div className='lg:h-screen w-screen bg-[#eb6200] text-[#fffaf1] flex flex-col lg:flex-row items-center justify-center p-[25px] lg:p-[50px] gap-[100px] '>
                <div className="flex flex-col justify-start items-start h-full w-full lg:w-6/12 gap-[50px]  ">
                    <h2 className='text-[3rem] font-semibold font-[Libre-Caslon-Text] '>Designed for Moms</h2>
                    <p className='text-xl font-semibold '>We'll take care of your food, so you can focus on you and your baby</p>
                    <p className='font-[Inter] text-justify lg:text-left '>Use this space to talk about your company's history, background, mission, or vision. Talk about your philosophy and how it affected your company's trajectory. </p>
                    <p className='font-[Inter] text-justify lg:text-left '>Use this space to talk about your company's history, background, mission, or vision. Talk about your philosophy and how it affected your company's trajectory. </p>
                    <Link className='border-solid border-[2px] border-[#fffaf1] py-2 px-4 rounded-full font-[Inter] font-bold hover:bg-[#fffaf1] hover:text-[#eb6200] transition duration-300 '>Sign Up</Link>
                </div>
                <div className="flex rounded-t-[300px] overflow-hidden border-solid border-[2px] border-[#fffaf1] w-full lg:w-5/12 h-full">
                    <img src="/pregnant2.jpg" alt="" className='h-full w-full object-cover ' />
                </div>
            </div>
        </>
    )
}

export default Offer