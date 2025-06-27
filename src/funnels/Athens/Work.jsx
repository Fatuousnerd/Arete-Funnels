import {Countertops, DeliveryDining, DinnerDining} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <>
            <div className='lg:h-screen w-screen flex flex-col justify-around items-center p-[25px] lg:p-[70px] gap-[50px] lg:gap-[0px] '>
                <div className="flex flex-col text-center items-center justify-center gap-4">
                    <h2 className='text-[3rem] font-[Libre-Caslon-Text] '>We have you covered!</h2>
                    <p className='font-[Inter] '>Add a short description of the business and the services that they provide. </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-[50px] ">
                    <div className="flex flex-col items-center justify-center text-center gap-3 ">
                        <i><Countertops style={{fontSize: '4rem'}} /></i>
                        <p className='text-[2rem] font-semibold font-[Libre-Caslon-Text]'>Freshly Prepared</p>
                        <p className='font-[Inter]'>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-3 ">
                        <i><DeliveryDining style={{fontSize: '4rem'}} /></i>
                        <p className='text-[2rem] font-semibold font-[Libre-Caslon-Text]'>Freshly Prepared</p>
                        <p className='font-[Inter]'>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center gap-3 ">
                        <i><DinnerDining style={{fontSize: '4rem'}} /></i>
                        <p className='text-[2rem] font-semibold font-[Libre-Caslon-Text]'>Freshly Prepared</p>
                        <p className='font-[Inter]'>Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page.</p>
                    </div>
                </div>
                <Link className='bg-transparent border-solid border-[2px] border-[#eb6200] py-2 px-4 rounded-full hover:bg-[#eb6200] hover:text-[#fffaf1] transition duration-300 font-[Inter] font-semibold mt-[50px] '>Subscribe Now</Link>
            </div>
        </>
    )
}

export default Work