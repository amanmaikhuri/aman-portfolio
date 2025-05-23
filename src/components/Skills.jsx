import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import SkillsData from "../sub/skills.json"
import '../index.css'
import cssImg from '../assets/css.png'
import discord from '../assets/discord.svg'
import express from '../assets/express.png'
import firebase from '../assets/Firebase.png'
import framer from '../assets/framer.png'
import github from '../assets/gitwhite.png'
import graphql from '../assets/graphql.png'
import html from '../assets/html.png'
import js from '../assets/js.png'
import mongodb from '../assets/mongodb.png'
import next from '../assets/next.png'
import node from '../assets/node-js.png'
import react from '../assets/react.png'
import reactNative from '../assets/ReactNative .png'
import redux from '../assets/redux.png'
import stripe from '../assets/stripe.webp'
import tailwind from '../assets/tailwind.png'
import ts from '../assets/ts.png'
import vercel from '../assets/vercel.svg'

const Skills = () => {

  const [data, setData] =useState([]);

  useEffect(() => {
    setData(SkillsData);
  },[])

  return (
    <div className="h-[100vh] w-full bg-gradient-to-b from-purple-500 to-blue-400 flex justify-center items-center  sticky top-5 z-5 text-[0.65rem] md:text-sm lg:text-[1rem]">
      <div className="h-[100vh] w-[102%] max-w-[1140px] px-4  rounded-2xl text-white overflow-y-hidden">
      
      <h2 className="text-blue-950 font-extrabold text-2xl px-4 py-2">
        Skills
      </h2>

       {/* skill container */}
       <div className="flex flex-col md:flex-row gap-1 md:gap-6 h-full relative overflow-y-hidden">
        {/* left part */}
        <div className="w-full h-full py-4 px-4">
          {data.length >=3 && 
          <div className="flex flex-col gap-4 px-4">
          {/* skill 1 */}
          <div className="flex flex-col gap-2">
              <h3 className="text-blue-950 font-bold text-[1.2rem]">{data[0].card1}</h3>
            <ul>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[0].skill1}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[0].skill2}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[0].skill3}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[0].skill4}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[0].skill5}
              </li>
            </ul>
          </div>

          {/* skill2 */}
          <div className="flex flex-col gap-2">
              <h3  className="text-blue-950 font-bold text-[1.2rem]">{data[1].card2}</h3>
            <ul>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[1].skill12}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[1].skill22}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[1].skill32}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[1].skill42}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[1].skill52}
              </li>
            </ul>
          </div>

          {/* skill3 */}
          <div className="flex flex-col gap-2">
              <h3  className="text-blue-950 font-bold text-[1.2rem]">{data[2].card3}</h3>
            <ul>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[2].skill13}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[2].skill23}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[2].skill33}
              </li>
              <li className="flex gap-2 items-center">
                <FaChevronRight />
                {data[2].skill44}
              </li>
            </ul>
          </div>
          </div>
          }
        </div>


        {/* right part */}
        <div className="relative h-[350px] w-full md:h-[70%] md:w-[45rem] rounded-lg overflow-y-hidden md:my-9 md:mx-6">
            <div className="w-full h-[150%] px-4 py-4 lg:px-9 bg-gradient-to-b from-pink-500 to-cyan-500 flex flex-wrap gap-6 justify-center absolute right-0 animate-scroll-up">
              <img src={html} alt="HTML" loading="lazy"
              className="h-20 w-20"/>

              <img src={cssImg} alt="CSS" loading="lazy"
              className="h-20 w-20"/>

              <img src={js} alt="JavaScript" loading="lazy"
              className="h-20 w-20"/>

              <img src={github} alt="GitHub" loading="lazy"
              className="h-20 w-20"/>

              <img src={react} alt="React" loading="lazy"
              className="h-20 w-20"/>

              <img src={tailwind} alt="tailwind" loading="lazy"
              className="h-25 w-25"/>
              
              <img src={reactNative} alt="react-native" loading="lazy"
              className="h-20 w-20"/>

              <img src={express} alt="express js" loading="lazy"
              className="h-20 w-20"/>

              <img src={redux} alt="redux" loading="lazy"
              className="h-20 w-20"/>

              <img src={ts} alt="typeScript" loading="lazy"
              className="h-20 w-20"/>

              <img src={firebase} alt="firebase" loading="lazy"
              className="h-20 w-18"/>

              <img src={next} alt="next-js" loading="lazy"
              className="h-20 w-20"/>

              <img src={vercel} alt="vercel" loading="lazy"
              className="h-20 w-50"/>

              <img src={node} alt="node-js" loading="lazy"
              className="h-20 w-20"/>

              <img src={mongodb} alt="mongodb atlas" loading="lazy"
              className="h-35 w-20"/>

              <img src={graphql} alt="graphql" loading="lazy"
              className="h-20 w-20"/>

              <img src={discord} alt="discord" loading="lazy"
              className="h-20 w-20"/>

              <img src={stripe} alt="stripe" loading="lazy"
              className="h-20 w-20"/>

              <img src={framer} alt="framer" loading="lazy"
          className="h-20 w-20"/>
            </div>

            {/* gradient boxes */}
            {/* <div className="h-12 w-full absolute top-0 bg-gradient-to-b from-blue-100"></div>

            <div className="h-12 w-full absolute bottom-0 bg-gradient-to-t from-blue-100"></div> */}
        </div> 
       </div>
    </div>
    </div>
    
  )
}
export default Skills