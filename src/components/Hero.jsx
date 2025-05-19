import { FaChevronRight } from "react-icons/fa"
import profile from "../assets/amanLogo.png"
import '../index.css'

const Hero = () => {
  return (
    <div className="w-[95%] lg:h-[500px] md:min-h-[300px] mx-auto px-4 py-2 flex flex-col-reverse gap-2 border rounded-sm relative bg-gradient-to-r from-[var(--primary)] to-[var(--mindful)] text-white -skew-y-1">

      {/* skew container */}
      <div className="hidden md:block h-[108%] w-[200px] lg:w-[300px] absolute -top-3 lg:-top-4 right-5 lg:right-20 -skew-x-4 rounded-sm bg-[var(--success)] skew-y-1 "></div>

        {/* image logo */}
        <img src={profile} alt="Aman Maikhuree" loading="lazy"
        className="md:absolute top-6 lg:top-16 right-22 lg:right-[14%] h-[250px] lg:h-[350px] w-[250px] lg:w-[350px] rounded-full skew-y-1"/>

        {/* left part content */}
        <div className="py-5 px-4 flex flex-col justify-center gap-1 md:gap-2 lg:gap-4 md:max-w-[50%] my-auto skew-y-1">

            <h1 className="md:text-2xl lg:text-3xl font-bold animate-slide-right1">Aman Maikhuree <span className="text-fuchsia-900 md:text-2xl lg:text-3xl">Code.Reflect.Transfer</span></h1>

            <p className="md:max-w-[250px] lg:max-w-[350px] md:text-2xl lg:text-3xl animate-slide-right2">Building healing digital experiences with Code, Heart, Purpose.</p>

            <div className="flex gap-4 py-2 animate-slide-right3">
              <button 
              className="font-bold border rounded-sm px-2 py-1 lg:px-4 lg:py-2 bg-green-500 hover:bg-[var(--success)]">
                View myWork
              </button>

              <button 
              className="flex gap-1 items-center border rounded-sm px-2 py-1 lg:px-4 lg:py-2 bg-blue-950 font-bold hover:bg-[var(--mindful)]">
                Know more <FaChevronRight />
              </button>
            </div>
        </div>
        
    </div>
  )
}
export default Hero