import { Link } from "react-router-dom"
import { projects, Project } from "../Data/Projects"
import UseTitle from '../hooks/UseTitle';


const ProjectPage = () => {
UseTitle("Projects");

  return (
    <main>
      <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Work</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    
    {projects.map((p: Project, index:number)=> 

    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-200">
            <h3 className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition dark:text-yellow-200 font-semibold"> {p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4" >Overview <br/>{p.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Tech: {p.tech}</p>
            <div className="flex gap-4">
              <Link to={p.live} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank">Live Demo</Link>
              <Link to={p.github} className="text-gray-700 dark:text-gray-200 hover:underline" target="_blank">GitHub</Link>
            </div>
          </div>)}
          
      
      </div>
    </section>
    </main>
  )
}

export default ProjectPage
