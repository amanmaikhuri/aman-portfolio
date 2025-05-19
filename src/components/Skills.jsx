import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import SkillsData from "../sub/skills.json"
import '../index.css'
import skillsImage from "../assets/skills2.png"

const Skills = () => {

  const [data, setData] =useState([]);

  useEffect(() => {
    setData(SkillsData);
  },[])

  
  

  return (
    <div className="h-[100vh] w-[102%] max-w-[1140px] px-4 pb-8 flex flex-col justify-center gap-1 md:gap-5 md:flex-row bg-gradient-to-b from-purple-500 to-blue-400 rounded-2xl sticky top-5 z-5 text-white">
            {/* left part */}
            <div className='h-full w-[100%] px-4 py-2 flex flex-col justify-center gap-1 md:gap-2 rounded-lg'>
                <h2 className="font-extrabold md:text-[1.5rem]">Skills</h2>

                {data.length > 0 && (
                  // card1
            <>
              <h3 className="font-bold md:text-[1rem] text-cyan-200">{data[0].card1}</h3>
              <ul className="flex flex-col gap-1.5 text-[0.75rem]  md:text-[1rem] ">
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[0].skill1}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[0].skill2}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[0].skill3}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[0].skill4}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[0].skill5}
                </li>
              </ul>
            </>
)}
            <div className="h-auto w-full bg-amber-950 border rounded-lg">

            </div>

            <div className=" hidden h-full w-full px-2 py-2 bg-cyan-100 border rounded-lg md:grid overflow-hidden relative">
              <div className="h-18 md:h-15 w-full absolute top-0 bg-gradient-to-b from-orange-700 z-10"></div>

              <img src={skillsImage} alt="skills section" loading="lazy"
              className="h-full w-[100%] animate-scroll-up"/>

              <div className="h-18 md:h-15 w-full absolute bottom-0 bg-gradient-to-b to-green-700 z-10"></div>
              
            </div>
            </div>
            
            {/* right part */}

          <div className='h-full w-[100%] px-4 py-2 flex flex-col justify-center lg:justify-start lg:py-14 gap-1 md:gap-2 rounded-lg'>

          {/* card2 */}
          {data.length > 0 && (
            <>
              <h3 className="font-bold md:text-[1rem] text-cyan-200">{data[1].card2}</h3>
              <ul className="flex flex-col gap-1.5 text-[0.75rem]  md:text-[1rem] ">
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[1].skill12}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[1].skill22}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[1].skill32}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[1].skill42}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[1].skill52}
                </li>
              </ul>
            </>

            // card2
            


          )}
          <div className="h-auto w-full bg-amber-950 border rounded-lg"></div>

            {/* third card */}
          {data.length > 0 && (
            <>
              <h3 className="font-bold md:text-[1rem] text-cyan-200">{data[2].card3}</h3>
              <ul className="flex flex-col gap-1.5 text-[0.75rem]  md:text-[1rem] ">
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[2].skill13}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[2].skill23}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[2].skill33}
                </li>
                <li className="flex items-center gap-1">
                  <FaChevronRight color="cyan" />
                  {data[2].skill44}
                </li>
              </ul>
            </>

            // card2
            


          )}
          <div className="h-auto w-full bg-amber-950 border rounded-lg"></div>
            </div>
            </div>
  )
}
export default Skills