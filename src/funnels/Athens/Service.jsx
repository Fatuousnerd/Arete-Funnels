import React from 'react'

const Service = () => {
  return (
    <>
    <div className='min-h-screen w-screen flex flex-col gap-[50px] p-[25px] lg:p-[50px] border-b-solid border-b-[2px] border-[#eb6200] ' >
        <h2 className='text-center text-[4.5rem] font-[Libre-Caslon-Text] '>Sample Menu</h2>
        <div className="flex flex-col lg:flex-row w-full h-full justify-around items-center gap-[50px] lg:gap-4">
            <div className="flex w-full lg:w-3/12 p-3 items-center justify-center border-solid border-[2px] border-[#eb6200] rounded-lg flex-col gap-4">
                <img src="/pic1.jpg" alt="" className='object-cover w-full h-[300px] rounded-xl'/>
                <p className='font-[Inter] '>Weekly Subscription</p>
                <p className='font-semibold text-xl font-[Libre-Caslon-Text]'>Prenatal meal plans</p>
                <p className='font-[Inter] '>Starts at $180</p>
            </div>
            <div className="flex w-full lg:w-3/12 p-3 items-center justify-center border-solid border-[2px] border-[#eb6200] rounded-lg flex-col gap-4">
                <img src="/pic1.jpg" alt="" className='object-cover w-full h-[300px] rounded-xl'/>
                <p className='font-[Inter] '>Weekly Subscription</p>
                <p className='font-semibold text-xl font-[Libre-Caslon-Text]'>Prenatal meal plans</p>
                <p className='font-[Inter] '>Starts at $180</p>
            </div>
            <div className="flex w-full lg:w-3/12 p-3 items-center justify-center border-solid border-[2px] border-[#eb6200] rounded-lg flex-col gap-4">
                <img src="/pic1.jpg" alt="" className='object-cover w-full h-[300px] rounded-xl'/>
                <p className='font-[Inter] '>Weekly Subscription</p>
                <p className='font-semibold text-xl font-[Libre-Caslon-Text]'>Prenatal meal plans</p>
                <p className='font-[Inter] '>Starts at $180</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service