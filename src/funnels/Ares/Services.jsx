import React from 'react'

const Services = () => {
    return (
        <>
            <div className='lg:h-screen w-screen bg-[#f4f4f2] text-[#212529] flex flex-col items-center justify-center p-[25px] lg:p-[100px] gap-[50px] '>
                <h2 className='font-extrabold text-[2.5rem] text-center '>Join My Jam Sessions</h2>
                <div className="flex flex-col md:flex-row lg:flex-row gap-[30px] w-full justify-around items-center ">
                    <div className="flex flex-col gap-[5px]">
                        <img src="./pic1.jpg" alt="" className='rounded-xl object-cover w-[250px] h-[250px] border-[#adb0ff] border-solid border-[1.75px]'/>
                        <p className='font-extrabold text-[1.75rem] uppercase '>Morning Jam</p>
                        <p>8.00 am - 9.00 am</p>
                        <hr className='border-solid border-[2px] border-[#212529] rounded-full mb-[20px] '/>
                        <button className='bg-[#adb0ff] text-[#212529] p-[10px] pr-[30px] pl-[30px] rounded-lg border-[#212529] border-solid border-[1.5px] outline-none uppercase font-extrabold hover:bg-[--SecTextColor]  transition duration-300'>Reserve Now</button>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="./pic1.jpg" alt="" className='rounded-xl object-cover w-[250px] h-[250px] border-[#fd9f5b] border-solid border-[1.75px]'/>
                        <p className='font-extrabold text-[1.75rem] uppercase '>Morning Jam</p>
                        <p>8.00 am - 9.00 am</p>
                        <hr className='border-solid border-[2px] border-[#212529] rounded-full mb-[20px] '/>
                        <button className='bg-[#fd9f5b] text-[#212529] p-[10px] pr-[30px] pl-[30px] rounded-lg border-[#212529] border-solid border-[1.5px] outline-none uppercase font-extrabold hover:bg-[--SecTextColor]  transition duration-300'>Reserve Now</button>
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <img src="./pic1.jpg" alt="" className='rounded-xl object-cover w-[250px] h-[250px] border-[#ffacec] border-solid border-[1.75px]'/>
                        <p className='font-extrabold text-[1.75rem] uppercase '>Morning Jam</p>
                        <p>8.00 am - 9.00 am</p>
                        <hr className='border-solid border-[2px] border-[#212529] rounded-full mb-[20px] '/>
                        <button className='bg-[#ffacec] text-[#212529] p-[10px] pr-[30px] pl-[30px] rounded-lg border-[#212529] border-solid border-[1.5px] outline-none uppercase font-extrabold hover:bg-[--SecTextColor]  transition duration-300'>Reserve Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services