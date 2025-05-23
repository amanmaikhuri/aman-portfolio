import { FaCopyright } from 'react-icons/fa6'
import amanJpg from '../assets/amanLogo.png'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='h-full w-full overflow-hidden text-white'>

      {/* back to top */}
      <div className='py-4 px-4 text-center text-green-500 font-bold flex items-center justify-center gap-2 border w-[110%]'>
        Back to top <FaArrowAltCircleUp />
      </div>

      {/* footer section */}
      <div className='h-full w-full md:max-w-[1080px] flex flex-col mx-auto px-9 py-6'>
        <div className='h-[70px] w-[200px] relative overflow-hidden rounded-lg
        '>
            <img src={amanJpg} alt="Aman Maikhuree Logo" loading='lazy'
            className='h-[200px] w-[100%] absolute -top-12'/>
        </div>
        <p className=' py-2 max-w-[400px] text-white'>a self-taught developer, problem-solver, and dreemer with a deep curiosity for technology and a heart rooted in purpose.</p>
      </div>

      <div>
        <p className='text-white px-6 py-2 flex justify-center items-center gap-2 border-t-2'>
          <FaCopyright size={26}/> - All right reserved by Aman Maikhuree 2025 - [inspired by popular Websites]
        </p>
      </div>
    </div>
  )
}
export default Footer