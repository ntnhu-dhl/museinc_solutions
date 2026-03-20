import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Newsletter.css';

const Newsletter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="newsletter" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="newsletter-content"
        >
          <div className="newsletter-text">
            <h2 className="newsletter-title">Giữ kết nối cùng nhau</h2>
            <p className="newsletter-subtitle">
              Đăng ký nhận thông tin để cập nhật tin tức và thông tin sự kiện mới nhất.
            </p>
          </div>
          
          <form className="newsletter-form">
            <input 
              type="text" 
              placeholder="Nhập vào tên của bạn"
              className="newsletter-input"
            />
            <input 
              type="email" 
              placeholder="Nhập email của bạn"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              SUBCRIBE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
