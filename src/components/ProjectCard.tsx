import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTilt } from "../hooks/useTilt";
import { Project } from "../Data/Projects";

const tiltOptions = {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
  scale: 1.02,
};

interface Props {
  p: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ p, index }) => {
  const tiltRef = useTilt(tiltOptions); // ✔ LEGAL (hook inside component)

  return (
    <motion.div
      ref={tiltRef}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow transition-transform duration-200 
                 hover:shadow-[0_0_25px_rgba(255,200,80,0.4)] hover:scale-[1.03]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold font-poppins dark:text-yellow-200">
        {p.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4 font-poppins">
        Overview <br /> {p.description}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-poppins">
        Tech: {p.tech}
      </p>

      <div className="flex gap-4">
        <Link
          to={p.live}
          className="text-blue-600 dark:text-blue-400 hover:underline font-poppins"
          target="_blank"
        >
          Live Demo
        </Link>

        <Link
          to={p.github}
          className="text-gray-700 dark:text-gray-200 hover:underline font-poppins"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
