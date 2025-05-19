import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoToggle } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3 border-b text-white bg-gradient-to-r from-purple-700 ">
        <div className="flex justify-between items-center gap-2">
            <FaBarsStaggered />
            <p className="text-sm text-blue-300 font-bold">Aman Maikhuri</p>
        <ul className="flex justify-between items-center gap-4">
            <li><a href="https://www.facebook.com/amanmaikhuriofficial"><FaFacebookF /></a></li>
            <li><a href="https://www.instagram.com/the_aman_effect/"><FaInstagram /></a></li>
            <li><a href="https://github.com/amanmaikhuri"><FaGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/aman-maikhuri-622582263/"><FaLinkedinIn /></a></li>
        </ul>
        </div>
        <a href="index.html"><img src="" alt="" /></a>
        <IoToggle size={26}/>
    </div>
  )
}
export default Header