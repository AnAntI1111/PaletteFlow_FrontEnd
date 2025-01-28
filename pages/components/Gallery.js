import { motion } from 'framer-motion';
import styles from './Gallery.module.css';


export default function Gallery({ scrollY, fadeEnd }) {
  const opacity = scrollY > fadeEnd ? 1 : 0;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: "url('/BG.png')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
        opacity: opacity,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Grid Container */}
      <div className={styles.gallery}>
        <div className={styles.frame60}>
          <img className={styles.pic60} src="/pic60.png" width={550} />
        </div>
        <div className={styles.text60}>
          <img className={styles.h60} src="/h60.png" width={460} />
          <img className={styles.p60} src="/p60.png" width={400} />
        </div>
      </div>
    </motion.div>
  );
}
