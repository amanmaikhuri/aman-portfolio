import img from '../assets/image.png'


const ContactMe = () => {
  return (
    <div className="px-4 py-4 h-[30rem] w-full bg-gradient-to-b from-purple-500 to-green-500 text-blue-950">

      {/* content container */}
      <div className="px-2 py-2 h-full w-full max-w-[1080px] mx-auto flex justify-center items-center gap-2">
        {/* lft part */}
        <div className='w-full h-full relative flex justify-center items-center'>
          <img src={img} alt="contact image" className=' hidden md:block w-[100%] h-[72%] rounded-lg'/>
        </div>
        {/* right part */}
        <div className='h-[72%] w-full md:w-[70%] max-w-[100%]'>
          <h3 className='px-6 font-extrabold text-xl'>Contact Me</h3>
          <form action="submit" method="post" className="px-6 py-5 flex flex-col gap-4 rounded-md">
            <input type="name" placeholder="your name" className="border px-2 py-1 rounded-md"/>
            <input type="number" placeholder="mobile number" className="border px-2 py-1 rounded-md"/>
            <input type="email" placeholder="your email" className="border px-2 py-1 rounded-md"/>
            <textarea name="comments" id="comments" placeholder="comments (optional)" className="border px-2 py-1 rounded-md"></textarea>
            <input type="submit" value="submit" className="border px-4 py-1 rounded-md font-bold w-fit bg-gradient-to-r from-blue-200 to-pink-200" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default ContactMe