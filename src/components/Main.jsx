import { ArrowOutward } from '@mui/icons-material';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../index.css'

const Portfolio = [
  {
    id: 1,
    img: "/Ares.png",
    name: "Ares",
    title: "Ares | Lead Capture",
    desc: "Let your funnel work while you train. Ares' lead capture system helps coaches collect emails, build trust, and nurture prospects - without needing to DM everyone manually.",
    tags: "Meal Plans, eBooks, Guides, Training",
    lnk: "/Ares"
  },
  {
    id: 2,
    img: "/Athens.png",
    name: "Athens",
    title: "Athens | Lead Capture",
    desc: "Whether you're giving away recipes or a grocery guide, Athens captures your audience at the peak of curiosity and drives them toward your offer - one lead at a time.",
    tags: "Mom Coach, Meal Plans, Nutrition",
    lnk: "/Athens"
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
      <div className="flex flex-wrap gap-[50px] items-center justify-start md:justify-center relative top-[70px] min-h-screen w-screen p-[25px] lg:p-[50px] ">
        {Portfolio.map((port) => (
          <div className="flex flex-col items-start justify-between w-[375px] h-[500px] bg-[--SecBgColor] text-[--MainTextColor] bg-opacity-75 backdrop-blur-3xl rounded-[20px] shadow-lg p-3 pb-4" key={port.id}>
            <img src={port.img} alt="" className='h-[200px] w-full object-cover rounded-[10px] mb-4 ' />
            <div className="flex flex-col justify-between h-full w-full">
              <div className="flex flex-col">
                <h1 className='font-extrabold text-[2rem] leading-[2.5rem] '>{port.title}</h1>
                <p className='text-[--SecTextColor] font-light border-b-solid border-b-[2px] border-b-[--SecTextColor] p-1  '>{port.tags}</p>
              </div>
              <p className='font-light text-opacity-75 '>{port.desc}</p>
              <div className="flex w-full items-center justify-between">
                <Link to="/form" style={{ fontWeight: "700" }} className='text-[--SecTextColor] font-bold border-solid border-[2px] border-[--SecTextColor] rounded-lg p-2 hover:bg-[--SecTextColor] hover:text-[--MainTextColor]  '>Get {port.name}</Link>
                <Link to={port.lnk} style={{ fontWeight: "700" }} className='p-2 bg-[--MainBgColor] shadow-lg rounded-full flex items-center justify-center hover:shadow-2xl hover:scale-[1.05] transition duration-300 '><ArrowOutward /></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Main