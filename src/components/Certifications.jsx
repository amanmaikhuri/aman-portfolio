import infoysSpringboard from "../assets/overviewOfInfosysSpringboard.jpg"
import activeListening from "../assets/activeListeningSkills.jpg"
import bodyLanguage from "../assets/understandingBodyLanguage.jpg"
import machineLearning from "../assets/introductionToMachineLearningh.jpg"
import python from "../assets/basicsOfPython.jpg"
import creativeConfidence from "../assets/buildingCreativeConfidence.jpg"
import agileMindset from "../assets/buildingAgileMindset.jpg"
import businessCommunication from "../assets/basicsOfBusinessCommunication.jpg"
import businessEnglish from "../assets/businessEnglish.jpg"
import businessWriting from "../assets/businessWriting.jpg"
import communication from "../assets/communicatingToSucceed.jpg"
import presentations from "../assets/highImpactPresentations.jpg"
import emailWriting from "../assets/emailWritingSkills.jpg"
import interactiveSkills from "../assets/interactiveSkiils.jpg"
import speakUp from "../assets/speakUp.jpg"
import timeManagement from "../assets/timeManagement.jpg"

const Certifications = () => {
  return (
    <div className="h-[24rem] w-full relative bg-gradient-to-r from-blue-950 to-blue-500 overflow-x-hidden">
      <div>
        <h3 className="px-6 py-2 font-extrabold text-2xl text-blue-500">Certifications</h3>
        <div className="h-[20rem] w-[9300%] md:w-[4200%] lg:w-[1900%] flex gap-4 items-center animate-slide-left-certifications absolute top-9">
        <img src={timeManagement} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={speakUp} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={interactiveSkills} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>
        
        <img src={emailWriting} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={presentations} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={communication} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={businessWriting} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={businessEnglish} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={businessCommunication} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={agileMindset} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={creativeConfidence} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={python} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={machineLearning} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={bodyLanguage} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={activeListening} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

        <img src={infoysSpringboard} alt="" loading="lazy"
        className="h-[18rem] w-[27rem] md:w-[27rem] pl-4 rounded-lg"/>

      </div>
      </div>
      
    </div>
  )
}
export default Certifications