import { ArrowOutward } from '@mui/icons-material';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Portfolio = [
  {
    id: 1,
        img: "/pic1.jpg",
        title: "Ares | Lead Capture",
        desc: "Build trust while you sleep.",
        tags: "Meal Plans, eBooks, Guides",
        lnk: "/Ares"
  },
  // {
  //   id: 2,
  //   img: "/pic1.jpg",
  //   title: "Peperomia Plants",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas accusamus.",
  //   tags: "Health, Finance, Nutrition, Fitness",
  //   lnk: "https://areteco.agency/"
  // },
  // {
  //   id: 3,
  //   img: "/pic1.jpg",
  //   title: "Peperomia Plants",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas accusamus.",
  //   tags: "Health, Nutrition, Fitness",
  //   lnk: "https://areteco.agency/"
  // },
];

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-[25px] items-center justify-start md:justify-center relative top-[70px] min-h-screen w-screen p-[25px] lg:p-[50px] ">
        {Portfolio.map((port) => (
          <div className="flex flex-col items-start justify-between w-[375px] h-[450px] bg-[--SecBgColor] text-[--MainTextColor] bg-opacity-75 backdrop-blur-3xl rounded-[20px] shadow-lg p-3 pb-4" key={port.id}>
            <img src={port.img} alt="" className='h-[225px] w-full object-cover rounded-[10px]' />
            <h1 className='font-extrabold text-[2rem] '>{port.title}</h1>
            <p className='font-light text-opacity-75 '>{port.desc}</p>
            <div className="flex w-full items-center justify-between">
              <p className='text-[--SecTextColor] font-bold border-solid border-[2px] border-[--SecTextColor] rounded-lg p-2  '>{port.tags}</p>
              <Link to={port.lnk} style={{fontWeight:"700"}} className='p-2 bg-[--MainBgColor] shadow-lg rounded-full flex items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition duration-300 '><ArrowOutward /></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Main