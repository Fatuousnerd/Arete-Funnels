import './funnel.css'

const About = () => {
    return (
        <>
            <div className='bg-[#eb6200] text-[#fffaf1] lg:h-screen w-screen flex flex-col lg:flex-row items-center justify-center p-[25px] lg:p-[50px] gap-[50px] lg:gap-[100px] '>
                <div className="flex w-full lg:w-6/12 h-full justify-start ">
                    <h2 className='text-[3rem] leading-[3.5rem] font-[Libre-Caslon-Text] '>Getting the best care right from the start</h2>
                </div>
                <div className="flex flex-col gap-[25px] w-full lg:w-6/12 h-full justify-center items-center">
                    <h3 className='text-xl font-semibold font-[Libre-Caslon-Text] '>The right nutritional support from prenatal to postpartum</h3>
                    <p className='font-[Inter] '>Write a paragraph that talks about your company here. You can talk about your company's background, history, mission, vision, or philosophy. Anything that will introduce your brand's persona to your clients.</p>
                </div>
            </div>
        </>
    )
}

export default About