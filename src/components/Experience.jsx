import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
  return (
    <div className="border-b text-neutral-900 pb-4">
        <motion.h1 
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.5 }}
            className="my-20 text-center text-5xl font-bold">
            Experience
        </motion.h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-900 font-bold">
                            {experience.year}
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className="w-full max-w-xl lg:w-3/4">
                        <h2 className="mb-2 text-xl font-bold">
                            {experience.role} <span className="text-sm text-yellow-400">{experience.company}</span> 
                        </h2>
                        
                        <p className="mb-4 text-white">{experience.description}</p>
              
                        {/* Conditionally render technologies */}
                        {experience.role !== "Technical Head" && experience.company !== "Androkit Club, GLA University" && (
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, index) => (
                                    <span key={index} className="rounded bg-purple-700 px-2 py-1 text-sm font-medium text-blue-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Experience;
