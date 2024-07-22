import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoJava } from "react-icons/bi";
import { SiHtml5, SiCss3, SiJavascript, SiGit, SiSqlite, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{ opacity:1,y:0 }}
        initial={{ opacity:0, y:100 }}
        transition={{ duration:1.5 }}
        className="my-20 text-center text-5xl font-bold">
            Technologies
        </motion.h1>
        
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <BiLogoJava className="text-7xl text-red-400"/>
            </motion.div>
            
            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <SiHtml5 className="text-7xl text-red-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <SiCss3 className="text-7xl text-yellow-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <SiGithub className="text-7xl text-gray-400"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <SiJavascript className="text-7xl text-yellow-400"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <RiReactjsLine className="text-7xl text-cyan-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(5.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <SiGit className="text-7xl text-red-600"/>
            </motion.div>

            <motion.div 
                variants={iconVariants(6.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl bg-gray-900 p-4">
                <SiSqlite className="text-7xl text-sky-600"/>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies;
