import { CloseRounded, MenuRounded } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const DemoSidebar = () => {

    const [open, setOpen] = useState(false);

    const location = useLocation();
    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const lastSegment = pathSegments.pop() || "home";
        setActivePage(lastSegment);
    }, [location]);

    return (
        <>
            <button className='fixed flex flex-col lg:hidden z-[99] mt-[20px] ml-[20px] text-[--SecTextColor] bg-[rgb(255, 255, 255)] bg-opacity-75 backdrop-blur-3xl p-[15px] rounded-full outline-none border-none ' onClick={() => setOpen((prev) => !prev)}>{!open ? <MenuRounded /> : <CloseRounded />}</button>
            <Link to="https://portfolio.areteco.agency/form" className='p-[05px] bg-[--HTextColor] rounded-md font-bold text-3xl flex items-center justify-center uppercase hover:scale-[1.02] text-center mt-[20px] mr-[25px] z-[9] right-0 absolute w-[200px] '>Get {activePage}</Link>
            {open &&
                <div className='flex flex-col lg:hidden h-screen w-[300px] fixed z-[98] bg-[#2c1f14] bg-opacity-75 backdrop-blur-lg p-[75px] pt-[100px] gap-[40px] text-4xl '>
                    <Link to="https://areteco.agency/" className="text-3xl font-extrabold text-[--SecTextColor] hover:text-[--MainTextColor]">Arete Co</Link>
                    <Link to="/" className='hover:text-[--HTextColor]'>Portfolio</Link>
                    <Link to="https://areteco.agency/#contact" className='hover:text-[--HTextColor]'>Contact</Link>
                    <Link to="https://portfolio.areteco.agency/form" className='p-[05px] bg-[--HTextColor] rounded-md font-bold text-3xl flex items-center justify-center uppercase hover:scale-[1.02] text-center'>Get {activePage}</Link>
                </div>
            }
        </>
    )
}

const DemoNav = () => {

    const location = useLocation();
    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const lastSegment = pathSegments.pop() || "home";
        setActivePage(lastSegment);
    }, [location]);

    return (
        <>
            <DemoSidebar />
            <div className='w-full h-[70px] bg-[--SecBgColor] hidden lg:flex items-center justify-between p-[20px] pr-[30px] pl-[30px] fixed z-[99]'>
                <Link to="https://areteco.agency/" className="text-3xl font-extrabold text-[--SecTextColor] hover:text-[--MainTextColor]">Arete Co</Link>
                <div className="flex gap-[25px]">
                    <Link to="/" className='hover:text-[--HTextColor]'>Portfolio</Link>
                    <Link to="https://areteco.agency/#contact" className='hover:text-[--HTextColor]'>Contact</Link>
                </div>
                <Link to="https://areteco.agency/form" className='p-[10px] bg-[--HTextColor] rounded-md font-bold uppercase hover:scale-[1.02]'>Get {activePage}</Link>
            </div>
        </>
    )
}

export default DemoNav