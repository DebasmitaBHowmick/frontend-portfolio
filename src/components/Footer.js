import { Link } from "react-router-dom"


const Footer = () => {
  return (
   <footer
      id="contact" className="py-4 text-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <p className="text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Debasmita •{" "}
        <Link to="98debas@gmail.com" 
          className=" text-blue-600 dark:text-blue-400 hover:underline" >Email Me
        </Link>
       
      </p>
      <p >
         <Link to="https://www.linkedin.com/in/debasmita-bhowmick-232941201/"
          className=" text-blue-600 dark:text-blue-400 hover:underline" >LinkedIn
        </Link>
      </p>
    </footer>
  )
}

export default Footer
