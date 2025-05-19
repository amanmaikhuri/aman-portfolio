import AboutMe from "./AboutMe"
import ProjectSection from "./ProjectSection"
import Skills from "./Skills"

const AboutSection = () => {
  return (
    <div className="h-[calc(3 *100vh)] lg:h-full w-full px-4 pb-2  flex flex-col items-center relative">
        {/* about me  */}
        <AboutMe />

        {/* my developments */}
        <Skills />

        {/* Skills Section */}
        <ProjectSection />

    </div>
  )
}
export default AboutSection