import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiAngular,
  SiNodedotjs,
} from "react-icons/si";
import { TbBrandAzure, TbBrandOpenai } from "react-icons/tb";
import { FaBrain, FaDatabase, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techStack = [
  { Icon: SiPython, color: "text-blue-400", duration: 2.5 },
  { Icon: SiFastapi, color: "text-green-500", duration: 3 },
  { Icon: FaRobot, color: "text-cyan-400", duration: 3.5 },
  { Icon: TbBrandOpenai, color: "text-emerald-400", duration: 4 },
  { Icon: FaBrain, color: "text-violet-400", duration: 4.5 },
  { Icon: SiAngular, color: "text-red-500", duration: 5 },
  { Icon: SiNodedotjs, color: "text-green-500", duration: 5.5 },
  { Icon: FaDatabase, color: "text-yellow-400", duration: 3.5 },
  { Icon: SiPostgresql, color: "text-sky-500", duration: 6 },
  { Icon: SiRedis, color: "text-red-500", duration: 6.5 },
  { Icon: TbBrandAzure, color: "text-blue-600", duration: 7 },
  { Icon: SiDocker, color: "text-sky-400", duration: 7.5 },
  { Icon: SiGit, color: "text-red-500", duration: 8 },
  { Icon: SiGithub, color: "text-white", duration: 8.5 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl font-bold"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techStack.map(({ Icon, color, duration }) => (
          <motion.div
            key={color + duration}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl bg-gray-900 p-4"
          >
            <Icon className={`text-7xl ${color}`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
