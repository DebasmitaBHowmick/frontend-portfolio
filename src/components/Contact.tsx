
import { useState } from 'react';
import UseTitle from '../hooks/UseTitle';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Contact = () => {
UseTitle("Contact");

const [status, setStatus] = useState<string>("");
const navigate = useNavigate()

 async function handleContact (e:React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus("Sending...")
  setTimeout(()=> { setStatus("Message Sent! ✅ ")},800);
  toast.info("Message sent successfully!")
  navigate("/");
};


  return (
     <section
      id="contact"
      className="py-16 px-6 sm:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get in touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a project, question, or just want to say hi? Send me a message.
        </p>

        <form onSubmit={handleContact} className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 sm:p-8 shadow-sm"
          aria-label="Contact form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</span>
              <input
                required
                name="name"
                type="text"
                className="px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</span>
              <input
                required
                name="email"
                type="email"
                className="px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="your@gmail/yahoo/outlook.com"
              />
            </label>
          </div>

          <label className="flex flex-col mt-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</span>
            <textarea
              required
              name="message"
              rows={6 as number}
              className="px-3 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tell me about your project..."
            />
          </label>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
              Send message
            </button>

            <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>
          </div>
        </form>

        <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">
          Or reach me at 
          <a href="mailto:98debas@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
           98debas@gmail.com 
          </a>
          <a href='https://www.linkedin.com/in/debasmita-bhowmick-232941201/' className='text-blue-600 dark:text-blue-400 hover:underline'> My LinkIdn profile </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
