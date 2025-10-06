import { Link } from "react-router-dom"
import UseTitle from './../hooks/UseTitle';

const HeroPage = () => {
UseTitle("Home")
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-center px-4 transition-colors duration-300">
      <h1 className="text-5xl font-bold mb-4 dark:text-white">Hi, I am Debasmita Bhowmick</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
      Front-End Developer in Progress | React • Redux • Tailwind Aficionado | Driven to Build Intuitive UI
      </p>
      
     <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800aa">
      <Link to="/projects" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      View my work
      </Link>
      </button>
    </section>
    </main>
  )
}

export default HeroPage
