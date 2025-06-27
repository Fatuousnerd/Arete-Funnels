import { Instagram, Reddit, X } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='bg-[#eb6200] text-[#fffaf1] lg:h-[500px] w-screen p-[25px] lg:p-[50px] flex flex-col lg:flex-row gap-[100px] items-center justify-center [&_h2]:font-[Libre-Caslon-Text]  '>
                <div className="flex flex-col w-full lg:w-6/12 h-full justify-between items-start gap-[25px] lg:gap-0 ">
                    <p className='font-[Libre-Caslon-Text]'>Athens <span className='font-[Inter] text-[#fffaf1] '>Nutrition</span></p>
                    <h2 className='text-[5rem] font-semibold leading-[5rem] '>Learn more. Let's talk.</h2>
                    <p className='font-[Inter] '>Add a short statement that supports the heading</p>
                </div>
                <div className="flex flex-wrap gap-[50px] lg:gap-[100px] w-full lg:w-6/12">
                    <div className="flex flex-col">
                        <p className='font-bold font-[Inter] text-xl '>Phone</p>
                        <p className='font-[Inter] font-light '>+123456789</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='font-bold font-[Inter] text-xl '>Email</p>
                        <p className='font-[Inter] font-light '>email@athens.example</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='font-bold font-[Inter] text-xl '>Socials</p>
                        <div className="flex gap-[10px]">
                            <Link to="https://"><X/></Link>
                            <Link to="https://"><Instagram/></Link>
                            <Link to="https://"><Reddit/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer