import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-1 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="pb-8 text-3xl font-medium tracking-tight lg:mt-16 lg:text-6xl"
            >
              Puroo Kulshrestha
            </motion.h1>

            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-yellow-500 via-teal-400 to-blue-300 bg-clip-text lg:text-5xl text-3xl tracking-tight text-transparent"

            >
              FullStack Developer Enthusiast
            </motion.span>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="my-2 max-w-2xl py-3 font-semibold tracking-tighter lg:text-2xl text-white"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={profilePic}
              alt="profile"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
