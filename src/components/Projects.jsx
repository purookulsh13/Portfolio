import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-5xl font-bold">
                Projects
            </motion.h1>

            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center">

                            <img
                                src={project.image} alt={project.title}
                                className="w-20 h-20 mb-6 rounded-full object-cover" />

                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">

                            <h6 className="mb-2 text-xl font-bold">{project.title}</h6>
                            <p className="mb-4 text-white font-semibold">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="rounded bg-purple-700 px-2 py-1 text-sm font-medium text-blue-300">{tech}</span>
                                
                            ))}

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
