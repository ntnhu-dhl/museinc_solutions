import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="quote-wrapper">
            <motion.div
              className="quote-mark"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              "
            </motion.div>
            
            <motion.h2
              className="quote-text"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Âm nhạc là lý do chúng tôi bắt đầu, và luôn tiếp tục phát triển vì điều đó.
            </motion.h2>
          </div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <p>
              Với chúng tôi, âm nhạc không chỉ là nguồn cảm hứng – đó là lý do để bắt đầu 
              và động lực để không ngừng phát triển. B-Star ra đời từ đam mê thuần khiết 
              với âm nhạc, cùng sự am hiểu sâu sắc về âm thanh và giá trị cảm xúc mà nó mang lại.
            </p>
            <p>
              B-Star mong muốn mang đến những giải pháp không chỉ chuẩn kỹ thuật, mà còn giúp 
              thương hiệu của khách hàng nổi bật, vượt trội hơn đối thủ và xứng đáng với tâm 
              huyết đã đầu tư.
            </p>
          </motion.div>

          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">
              Về chúng tôi
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
