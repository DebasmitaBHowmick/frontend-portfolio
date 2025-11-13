import UseTitle from '../hooks/UseTitle';
import ProjectCard from './ProjectCard';
import { projects } from '../Data/Projects';


const ProjectPage = () => {
UseTitle("Projects");

  return (
    <main>
      <section id="projects" className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Particles */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <ul className="particles">
      {Array.from({ length: 20 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  </div>


      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Work</h2>
      
    
      <div className="flex flex-col gap-10 max-w-3xl mx-auto">
  {projects.map((p, index) => (
    <ProjectCard key={index} p={p} index={index} />
  ))}
</div>
      
  
    </section>
    </main>
  )
}

export default ProjectPage
