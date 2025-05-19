import growthSnap from "../assets/growthSnap.png"
import moodlogger from "../assets/moodLogger.png"

const ProjectSection = () => {
  return (
    <div className="h-[100vh] w-[100vw] max-w-[1200px] px-4 bg-gradient-to-b from-green-500 to-purple-500 rounded-2xl sticky top-9 z-10 overflow-x-hidden">

      {/* project title */}
        <div className="px-2 py-2 lg:pt-9 lg:text-2xl font-extrabold text-[1.2rem] text-blue-950">
          <h2>Projects</h2>
        </div>


      {/* cards container */}
      <div className="h-[89%] min-w-[400vw] md:min-w-[140vw] md:px-2 max-w-[1200px] bg-gradient-to-b from-green-500 to-purple-500  flex  flex-wrap gap-5 overflow-hidden animate-slide-left">

        {/* box1       */}
        <div className="flex flex-col gap-2 bg-gradient-to-b from-blue-400 to-blue-950 w-[300px] h-[480px] md:w-[320px] lg:h-[460px] md:h-[520px] px-2 py-2 rounded-lg md:mt-2">
          <h3 className="font-bold text-2xl text-blue-950">
            Growth Snap
          </h3>
          <img src={growthSnap} alt="Growth Snap" loading="lazy"
              className="h-[50%] w-[350px] rounded-lg"
          />

          <div className="h-full px-2 py-2 w-[280px] lg:w-[100%] flex flex-col gap-2 border rounded-lg">
            <p className="h-full"><strong>Project Description:</strong></p>

            <div className="flex gap-2 ">
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-950 bg-blue-200">
                  Live link
                </a>
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-600 bg-blue-100">
                  Github Repo Link
                </a>
            </div>
          </div>

        </div>

        {/* box-2 */}
        <div className="flex flex-col gap-2 bg-gradient-to-b from-blue-400 to-blue-950 w-[300px] h-[480px] md:w-[320px] md:h-[500px] lg:h-[460px] px-2 py-2 rounded-lg mt-4  md:mt-6">
          <h3 className="font-bold text-2xl text-blue-950">
            Mood Logger
          </h3>
          <img src={moodlogger} alt="Growth Snap" loading="lazy"
              className="h-[50%] md:h-[450px] w-[350px] rounded-lg"
          />

          <div className="h-full px-2 py-2 w-[280px] lg:w-[100%] flex flex-col gap-2 border rounded-lg">
            <p className="h-full"><strong>Project Description:</strong></p>

            <div className="flex gap-2 ">
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-950 bg-blue-200">
                  Live link
                </a>
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-600 bg-blue-100">
                  Github Repo Link
                </a>
            </div>
          </div>

        </div>

        {/* box-3 */}
        <div className="flex flex-col gap-2 bg-gradient-to-b from-blue-400 to-blue-950 w-[300px] h-[480px] md:w-[320px] md:h-[520px] lg:h-[460px] px-2 py-2 rounded-lg md:mt-2">
          <h3 className="font-bold text-2xl text-blue-950">
            Expense Tracker
          </h3>
          <img src={growthSnap} alt="Growth Snap" loading="lazy"
              className="h-[50%] w-[350px] rounded-lg"
          />

          <div className="h-full px-2 py-2 w-[280px] lg:w-[100%] flex flex-col gap-2 border rounded-lg">
            <p className="h-full"><strong>Project Description:</strong></p>

            <div className="flex gap-2 ">
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-950 bg-blue-200">
                  Live link
                </a>
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-600 bg-blue-100">
                  Github Repo Link
                </a>
            </div>
          </div>

        </div>

        {/* box-2 */}
        <div className="flex flex-col gap-2 bg-gradient-to-b from-blue-400 to-blue-950 w-[300px] h-[480px] md:w-[320px] md:h-[500px] lg:h-[460px] px-2 py-2 rounded-lg mt-4  md:mt-6">
          <h3 className="font-bold text-2xl text-blue-950">
            Recipe Website
          </h3>
          <img src={moodlogger} alt="Growth Snap" loading="lazy"
              className="h-[50%] md:h-[450px] w-[350px] rounded-lg"
          />

          <div className="h-full px-2 py-2 w-[280px] lg:w-[100%] flex flex-col gap-2 border rounded-lg">
            <p className="h-full"><strong>Project Description:</strong></p>

            <div className="flex gap-2 ">
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-950 bg-blue-200">
                  Live link
                </a>
                <a href="" className="border px-2 py-0.5 rounded-md font-bold text-blue-600 bg-blue-100">
                  Github Repo Link
                </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ProjectSection