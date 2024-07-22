// import logo from "../assets/aboutt.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <motion.div
        className="bg-black rounded-full w-16 h-16 flex items-center justify-center text-xl text-[#63e] shadow-md"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        PK
      </motion.div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl cursor-pointer">
        <a
          className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center text-white shadow-md hover:bg-blue-800 transition-colors duration-300"
          href="https://www.linkedin.com/in/purookulsh/"
        >
          <FaLinkedin />
        </a>
        <a
          className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white shadow-md hover:bg-gray-800 transition-colors duration-300"
          href="https://github.com/purookulsh13"
        >
          <FaGithub />
        </a>
        <a
          className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white shadow-md hover:opacity-80 transition-opacity duration-300"
          href="https://www.instagram.com/sl33ping.b00th/"
        >
          <FaInstagram />
        </a>

        <a 
          href="/CV.pdf" 
          className="inline-block px-6 py-3 mt-4 text-lg font-medium text-white bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
        
      </div>
    </nav>
  );
}

export default Navbar;
