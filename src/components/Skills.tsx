import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../Data/Skills";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // Default for desktop

  // Determine items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setItemsPerView(1);
      } else if (width < 1024) {
        // Tablet
        setItemsPerView(2);
      } else {
        // Desktop/Laptop
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Reset current index when itemsPerView changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, skills.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + itemsPerView;
      return newIndex >= skills.length ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerView;
      return newIndex < 0 ? maxIndex : newIndex;
    });
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    if (skills.length <= itemsPerView) return; // Don't auto-slide if all items fit

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + itemsPerView;
        return newIndex >= skills.length ? 0 : newIndex;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [itemsPerView, maxIndex]);

  const visibleSkills = skills.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ul className="particles">
          {Array.from({ length: 15 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white font-poppins"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {/* Skills Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows - Only show if there are more slides */}
          {skills.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                aria-label="Previous skills"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                aria-label="Next skills"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-200"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Skills Cards Container */}
          <div className="mx-12 sm:mx-16 overflow-hidden">
            <div className="flex gap-4 sm:gap-6">
              <AnimatePresence mode="wait">
                {visibleSkills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${currentIndex}`}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700">
                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-3 font-poppins">
                        {skill.category}
                      </span>

                      {/* Skill Name */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">
                        {skill.name}
                      </h3>

                      {/* Decorative gradient line */}
                      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dots Indicator - Only show if there are more slides */}
        {skills.length > itemsPerView && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(skills.length / itemsPerView) }).map(
              (_, index) => {
                const slideStartIndex = index * itemsPerView;
                const isActive = currentIndex >= slideStartIndex && currentIndex < slideStartIndex + itemsPerView;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(slideStartIndex)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-8 bg-blue-600 dark:bg-blue-400"
                        : "w-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              }
            )}
          </div>
        )}

        {/* Mobile swipe hint */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6 font-poppins sm:hidden">
          Swipe or use arrows to navigate
        </p>
      </div>
    </section>
  );
};

export default Skills;

