import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
    return (
        <>
            <Sidebar />
            <div className='w-full h-[70px] bg-[--SecBgColor] hidden lg:flex items-center justify-between p-[20px] pr-[30px] pl-[30px] fixed z-[99]'>
                <Link to="/" className="text-3xl font-extrabold text-[--SecTextColor] hover:text-[--MainTextColor]">Arete Co</Link>
                <div className="flex gap-[25px]">
                    <Link to="https://areteco.agency/" className='hover:text-[--HTextColor]'>Home</Link>
                    <Link to="https://areteco.agency/#services" className='hover:text-[--HTextColor]'>Services</Link>
                    <Link to="https://areteco.agency/#portfolio" className='hover:text-[--HTextColor]'>Portfolio</Link>
                    <Link to="https://areteco.agency/#about" className='hover:text-[--HTextColor]'>About</Link>
                    {/* <Link to="https://areteco.agency/#" className='hover:text-[--HTextColor]'>Work</Link> */}
                    <Link to="https://areteco.agency/#contact" className='hover:text-[--HTextColor]'>Contact</Link>
                </div>
                <Link to="https://areteco.agency/form" className='p-[10px] bg-[--HTextColor] rounded-md font-bold uppercase hover:scale-[1.02]'>Get Started</Link>
            </div>
        </>
    )
}

export default Navbar