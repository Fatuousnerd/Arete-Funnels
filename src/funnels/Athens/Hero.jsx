import {Link} from 'react-router-dom'
import './funnel.css'

const Hero = () => {
    return (
        <>
            <div className='lg:h-screen w-screen flex flex-col lg:flex-row items-center justify-center p-[25px] lg:p-[50px] gap-[100px] font-[Libre Caslon Text] '>
                <div className="flex w-full lg:w-5/12 h-full rounded-t-[300px] overflow-hidden border-solid border-[2px] border-[#eb6200] ">
                    <img src="/pregnant1.jpg" alt="" className='object-cover w-full h-full '/>
                </div>
                <div className="flex flex-col w-full lg:w-6/12 h-full items-start justify-between gap-4 text-left ">
                    <p className='font-bold font-[Libre-Caslon-Text]'>Athens <span className='font-[Inter] text-[#eb6200] '>Nutrition</span></p>
                    <h1 className='text-[3rem] lg:text-[4.5rem] leading-[3rem] lg:leading-[4.5rem] font-[Libre-Caslon-Text] '>Nurturing <span className='italic text-[#eb6200] font-[Libre-Caslon-Text]'>Nutrition</span> for Expecting Moms</h1>
                    <p className='font-[Inter] '>Start life right with the proper diet</p>
                    <Link className='bg-transparent border-solid border-[2px] border-[#eb6200] py-2 px-4 rounded-full hover:bg-[#eb6200] hover:text-[#fffaf1] transition duration-300 font-[Inter] font-semibold '>Subscribe Now</Link>
                </div>
            </div>
        </>
    )
}

export default Hero