import React from 'react'
import DemoNav from '../../components/DemoNav'

const Athens = () => {
    return (
        <>
            <DemoNav />
            <div className="h-[calc(100vh-70px)] w-screen flex items-center justify-center relative top-[70px]">
                <div className="w-[90%] lg:w-[95%] h-[95%] flex items-center justify-center overflow-hidden rounded-lg border-solid border-[2px] border-[--MainTextColor] shadow-lg ">
                    <div className="absolute border-solid border-[5px] border-[--MainTextColor] border-t-transparent rounded-full h-[50px] w-[50px] animate-spin z-[-1] "></div>
                    <iframe src="https://athens.areteco.agency" frameborder="0" className="w-full h-full"></iframe>
                </div>
            </div>
        </>
    )
}

export default Athens