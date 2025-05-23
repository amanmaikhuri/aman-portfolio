import myProfile from '../assets/amanmaikhuree..png'

const AboutMe = () => {
  return (
    <div className='h-[100vh] w-full  bg-gradient-to-b from-blue-900 to-green-500 flex justify-center items-center  sticky top-2 z-3 '>
        <div className="h-full w-full max-w-[1080px] px-4 pt-4 pb-8  flex flex-col justify-center gap-1 md:gap-5 md:flex-row rounded-2xl text-white">
        {/* left part */}
        <div className="flex flex-col gap-3 items-start justify-center ">
            <img src={myProfile} alt="Aman Maikhuree profile picture" 
            loading='lazy'
            className='rounded-4xl py-2 h-[180px] md:h-[400px]'
            />
        </div>
        
        {/* right part */}
        <div className="h-full w-full max-w-[350px] flex flex-col gap-2 md:gap-3 items-start justify-center text-[0.65rem] md:text-sm lg:text-[1rem]">
          <h2 className='font-bold md:font-extrabold'>About Me</h2>

          <p className=' max-w-[900px]'>I'am Aman - a self-taught developer, problem-solver, and dreemer with a deep curiosity for technology and a heart rooted in purpose.</p>

          <p className=' max-w-[900px]'>with a master's degree in mathematics and hands-on experiencee in business operations, I transitioned into tech to build tools that empower individuals -mentally, emotionally, and professionally.</p>

          <p className=' max-w-[900px]'>Since January 2025, I've been on focused journey learning web Development and cybersecurity, building real-world applications thart blend technical power with human empathy. Whether it's journaling app to boost self-awareness or a billing system to optimize business, I build solutions that matters.</p>

          <p className=' max-w-[900px]'>My ultimate goal? to use code as a force for good - combining full-stack mastery with cybersecurity to create systems that are beautiful, secure, and empowering.</p>

          <p className=' max-w-[900px]'>I believe in building with soul, scaling with integrity, and never stopping at "just enough".</p>

          <button type="button"
          className="border px-3 py-1.5 pb-2 rounded-md text-white font-bold bg-gradient-to-r from-cyan-600 to-pink-600 w-fit"
          >
            Connect Now
          </button>
        </div>
    </div>
    </div>
  )
}
export default AboutMe