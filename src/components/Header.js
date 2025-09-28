import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assests/logo.png"

const Header = () => {

//active class

const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
const inActiveClass = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";


//toggle darkMode
const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || true);

useEffect(()=> {
  JSON.stringify(localStorage.setItem("darkMode", darkMode));

  if (darkMode) {
    document.documentElement.classList.add('dark')
  }else{
    document.documentElement.classList.remove('dark')
  }
}, [darkMode])

const [hidden, setHidden] = useState(false);
  return (
  <header>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} className="h-10 rounded-lg" alt="portfolio" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
    </Link>
    <button onClick= {() => setHidden(!hidden)}data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div className={`${hidden ? "hidden" : "block"} w-full md:hidden`} id="navbar-dropdown">
      <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
          <NavLink to="/" className={({ isActive }) => `${isActive ? activeClass : inActiveClass}`} aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => `${isActive ? activeClass : inActiveClass}`}>Projects</NavLink>
        </li>
        
        <li>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? activeClass : inActiveClass}`}>Contact</NavLink>
        </li>
        <button onClick={()=> setDarkMode(!darkMode)}  className={` dark:text-white ${darkMode ? "bi bi-moon-fill" : "bi bi-brightness-high-fill"}`}>  
           </button>
      </ul>
    </div>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/" className={({ isActive }) => `${isActive ? activeClass : inActiveClass}`} aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => `${isActive ? activeClass : inActiveClass}`}>Projects</NavLink>
        </li>
        
        <li>
          <NavLink to="/contact" className={({ isActive }) => `${isActive ? activeClass : inActiveClass}`}>Contact</NavLink>
        </li>

        <button onClick={()=> setDarkMode(!darkMode)}  className={` dark:text-white ${darkMode ? "bi bi-moon-fill" : "bi bi-brightness-high-fill"}`}>   </button>
      </ul>
    </div>
  </div>
</nav>

  </header>
  )
}

export default Header
