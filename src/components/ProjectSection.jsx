import growthSnap from "../assets/growthSnap.png"
import moodlogger from "../assets/moodLogger.png"

const ProjectSection = () => {
  return (
    <div className="h-[100vh] w-[100vw] px-4 bg-gradient-to-b from-green-500 to-purple-500 rounded-2xl sticky top-9 z-10 overflow-x-hidden ">

      {/* animated container  */}
      <div className="flex flex-col gap-2 px-2 py-2 absolute">
        <h2 className="font-extrabold px-4 py-2 text-cyan-200 text-2xl border-b-2">
          Projects & Experience
        </h2>

        {/* project cards container */}
        <div className="px-4 py-6 animate-slide-left md:w-[300%] lg:w-[100%] flex gap-6 relative">
            {/* card1 */}
            <div className="w-[320px] h-[520px] px-2 py-2 border rounded-lg bg-gradient-to-b from-blue-900 to-blue-500 text-white">
              <h3 className="font-bold text-blue-400 text-2xl pb-4 pt-1">Growth Snap</h3>
              <div className="rounded-md">
                <img src={growthSnap} alt="Growth Snap" loading="lazy"
                className="rounded-lg"/>
              </div>
              <div>
                <p className="py-1">
                  <strong className="text-blue-300">Tech Stack: </strong>
                  React.js, Vite, vercel, GitHub, Tailwind
                </p>
                <p className="py-1">
                  <strong className="text-blue-300">
                    Project Description:
                  </strong>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi repellat similique sed natus necessitatibus.
                </p>
                <div className="py-2 flex gap-4">
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-blue-950 font-bold">
                    GitHub Repo Link
                  </a>
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-green-600 font-bold">
                    Live Link
                  </a>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div className="w-[320px] h-[520px] px-2 py-2 border rounded-lg bg-gradient-to-b from-blue-900 to-blue-500 text-white mt-9">
              <h3 className="font-bold text-blue-400 text-2xl pb-4 pt-1">Mood Logger</h3>
              <div className="rounded-md">
                <img src={moodlogger} alt="Growth Snap" loading="lazy"
                className="rounded-lg"/>
              </div>
              <div>
                <p className="py-1">
                  <strong className="text-blue-300">Tech Stack: </strong>
                  React.js, Vite, vercel, GitHub, Tailwind
                </p>
                <p className="py-1">
                  <strong className="text-blue-300">
                    Project Description:
                  </strong>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi repellat similique sed natus necessitatibus.
                </p>
                <div className="py-2 flex gap-4">
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-blue-950 font-bold">
                    GitHub Repo Link
                  </a>
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-green-600 font-bold">
                    Live Link
                  </a>
                </div>
              </div>
            </div>

            {/* card3 */}
            <div className="w-[320px] h-[520px] px-2 py-2 border rounded-lg bg-gradient-to-b from-blue-900 to-blue-500 text-white">
              <h3 className="font-bold text-blue-400 text-2xl pb-4 pt-1">Recipe Web</h3>
              <div className="rounded-md">
                <img src={growthSnap} alt="Growth Snap" loading="lazy"
                className="rounded-lg"/>
              </div>
              <div>
                <p className="py-1">
                  <strong className="text-blue-300">Tech Stack: </strong>
                  React.js, Vite, vercel, GitHub, Tailwind
                </p>
                <p className="py-1">
                  <strong className="text-blue-300">
                    Project Description:
                  </strong>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi repellat similique sed natus necessitatibus.
                </p>
                <div className="py-2 flex gap-4">
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-blue-950 font-bold">
                    GitHub Repo Link
                  </a>
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-green-600 font-bold">
                    Live Link
                  </a>
                </div>
              </div>
            </div>

            {/* card4 */}
            <div className="w-[320px] h-[520px] px-2 py-2 border rounded-lg bg-gradient-to-b from-blue-900 to-blue-500 text-white mt-9">
              <h3 className="font-bold text-blue-400 text-2xl pb-4 pt-1">Amazon Clone</h3>
              <div className="rounded-md">
                <img src={growthSnap} alt="Growth Snap" loading="lazy"
                className="rounded-lg"/>
              </div>
              <div>
                <p className="py-1">
                  <strong className="text-blue-300">Tech Stack: </strong>
                  React.js, Vite, vercel, GitHub, Tailwind
                </p>
                <p className="py-1">
                  <strong className="text-blue-300">
                    Project Description:
                  </strong>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi repellat similique sed natus necessitatibus.
                </p>
                <div className="py-2 flex gap-4">
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-blue-950 font-bold">
                    GitHub Repo Link
                  </a>
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-green-600 font-bold">
                    Live Link
                  </a>
                </div>
              </div>
            </div>

            {/* card5 */}
            <div className="w-[320px] h-[520px] px-2 py-2 border rounded-lg bg-gradient-to-b from-blue-900 to-blue-500 text-white">
              <h3 className="font-bold text-blue-400 text-2xl pb-4 pt-1">Expense tracker</h3>
              <div className="rounded-md">
                <img src={growthSnap} alt="Growth Snap" loading="lazy"
                className="rounded-lg"/>
              </div>
              <div>
                <p className="py-1">
                  <strong className="text-blue-300">Tech Stack: </strong>
                  React.js, Vite, vercel, GitHub, Tailwind
                </p>
                <p className="py-1">
                  <strong className="text-blue-300">
                    Project Description:
                  </strong>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi repellat similique sed natus necessitatibus.
                </p>
                <div className="py-2 flex gap-4">
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-blue-950 font-bold">
                    GitHub Repo Link
                  </a>
                  <a href="#"
                  className="px-2 py-0.5 border rounded-md bg-green-600 font-bold">
                    Live Link
                  </a>
                </div>
              </div>
            </div>
        </div>

{/* gradient box */}
            <div className="h-[98%] w-18 bg-gradient-to-r from-white absolute -bottom-11 -left-4"></div>

            <div className=" hidden md:block lg:hidden h-[98%] w-18 bg-gradient-to-l from-white absolute -bottom-11 left-170"></div>

            <div className="h-[98%] w-18 bg-gradient-to-l from-white absolute -bottom-11 right-62"></div>
      
      </div>
    </div>
  )
}
export default ProjectSection