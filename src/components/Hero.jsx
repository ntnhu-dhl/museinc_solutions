import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '../data/projects';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="hero-background">
              <img 
                src={heroSlides[currentSlide].image} 
                alt={heroSlides[currentSlide].title}
              />
              <div className="hero-overlay"></div>
            </div>

            <div className="container">
              <div className="hero-content">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="hero-title"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="hero-subtitle"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                {heroSlides[currentSlide].link && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <a href={heroSlides[currentSlide].link} className="btn btn-primary">
                      Tìm hiểu thêm
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-tagline">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            "Âm nhạc là lý do chúng tôi bắt đầu, và luôn tiếp tục phát triển vì điều đó."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Với chúng tôi, âm nhạc không chỉ là nguồn cảm hứng – đó là lý do để bắt đầu 
            và động lực để không ngừng phát triển. B-Star ra đời từ đam mê thuần khiết 
            với âm nhạc, cùng sự am hiểu sâu sắc về âm thanh và giá trị cảm xúc mà nó mang lại.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            B-Star mong muốn mang đến những giải pháp không chỉ chuẩn kỹ thuật, mà còn giúp 
            thương hiệu của khách hàng nổi bật, vượt trội hơn đối thủ và xứng đáng với tâm 
            huyết đã đầu tư.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <a href="#about" className="btn btn-primary">
              VỀ CHÚNG TÔI
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
