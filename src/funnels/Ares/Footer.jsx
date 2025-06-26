import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-screen h-screen bg-[url(/pic2.jpg)] p-[25px] lg:p-[100px] relative overflow-hidden'>
                <div className="absolute bottom-[100px] flex flex-col pr-[500px] ">
                    <h2 className='font-extrabold text-[5.5rem] leading-[5.5rem] md:text-[10rem] md:leading-[10rem] lg:text-[5.5rem] lg:leading-[5.5rem] '>Ready to see a change?</h2>
                    <div className="flex flex-wrap items-start gap-[20px] mt-[30px]">
                        <div className="flex flex-col md:text-[2rem] lg:text-2xl"> 
                            <p>Ares</p>
                            <p>123 Anywhere St.</p>
                            <p>Any City, ST 12345</p>
                        </div>
                        <div className="flex flex-col md:text-[2rem] lg:text-2xl">
                            <p>Tel. (123) 456-7890</p>
                            <p>Email: hello@ares.com</p>
                            <p>Social: @ares</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer