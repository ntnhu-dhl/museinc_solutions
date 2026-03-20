import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CaseStudyCard.css';

const CaseStudyCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      className="case-study-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <a href={project.link} className="card-link">
        <div className="card-image-wrapper">
          <img 
            src={project.image} 
            alt={project.title}
            className="card-image"
          />
          <div className="card-overlay">
            <span className="card-cta">CASE STUDY</span>
          </div>
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-description">{project.description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default CaseStudyCard;
