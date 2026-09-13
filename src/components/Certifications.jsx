import { motion } from "framer-motion";

const certifications = [
  "Microsoft Certified: Azure AI Fundamentals",
  "Microsoft Certified: Azure AI Apps and Agents Developer",
  "Claude Certified Associate – Foundations",
];

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl font-bold"
      >
        Certifications
      </motion.h1>

      <div className="mx-auto max-w-3xl">
        <ul className="space-y-4 text-lg font-medium text-white md:text-xl">
          {certifications.map((cert, index) => (
            <motion.li
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-3"
            >
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
              <span>{cert}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Certifications;
