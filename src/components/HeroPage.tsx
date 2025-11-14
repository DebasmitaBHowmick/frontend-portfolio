import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import UseTitle from '../hooks/UseTitle';

const HeroPage = () => {
UseTitle("Home")
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4 transition-colors duration-300">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3 dark:text-white font-poppins">
        <span className="wave">👋</span> Hi,
      </h1>
      <br/>
        <AnimatedText text = `I'm Debasmit '\n 
        Bhowmick'`/>
      {/* Subtitle */}
      <motion.p
        className="mt-4 my-6 text-lg md:text-xl opacity-80 text-center max-w-2xl dark:text-white font-poppins"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        Front-End Developer in Progress • React • Redux • Tailwind Aficionado • Driven to Build Intuitive UI
      </motion.p>

      {/* CTA Button */}
      <motion.button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 
         focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-poppins"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
         
      <Link to="/projects" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      View my work
      </Link>
      
      </motion.button>
         {/* Wave Animation */}
      <style>{`
        .wave {
          display: inline-block;
          animation: wave 1.8s infinite;
          transform-origin: 70% 70%;
          font-size: 2.5rem;
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
    </main>
  )
}

export default HeroPage
