import { Routes, Route } from "react-router-dom";
import HeroPage from "../components/HeroPage";
import ProjectPage from "../components/ProjectPage";
import Contact from "../components/Contact";
import PageNotFound from './../components/PageNotFound';

const RouteComponents = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HeroPage/>}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element = {<PageNotFound/>}/>
      </Routes>
    </main>
  )
}

export default RouteComponents
