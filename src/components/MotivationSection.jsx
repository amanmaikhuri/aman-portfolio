import image from "../assets/image.png"

const MotivationSection = () => {
  return (
    <div className=" max-w-[1080px] h-[100px] md:h-[100px] mx-auto flex justify-center items-center mt-6 rounded-lg relative">
        <img 
        src={image} 
        alt="react"
        className="p-1 px-2 md:px-5 w-full h-full md:h-[100px] absolute top-0 overflow-hidden rounded-lg
        "/>
        <p className="absolute text-sm px-4 text-black font-semibold">"Start where you are. Use what you have. Do what you can."
        — Arthur Ashe</p>
    </div>
  )
}
export default MotivationSection