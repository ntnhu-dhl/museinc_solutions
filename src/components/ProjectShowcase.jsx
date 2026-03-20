import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/projects';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Show 2 projects at a time for larger images
  const projectsPerView = 2;
  const totalSlides = Math.ceil(projects.length / projectsPerView);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * projectsPerView;
    return projects.slice(start, start + projectsPerView);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <section className="project-showcase" id="projects">
      <div className="carousel-wrapper">
        <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="carousel-slide"
            >
              {getCurrentProjects().map((project) => (
                <div key={project.id} className="carousel-item">
                  <a href={project.link} className="project-card">
                    <div className="project-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <h3 className="project-title">{project.title}</h3>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
      </div>

      <div className="container">
        <div className="carousel-controls">
          <button 
            className="carousel-arrow carousel-arrow-left" 
            onClick={prevSlide}
            aria-label="Previous projects"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <a href="/case-study" className="view-all-btn">
            XEM TẤT CẢ
          </a>

          <button 
            className="carousel-arrow carousel-arrow-right" 
            onClick={nextSlide}
            aria-label="Next projects"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
