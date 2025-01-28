import { motion } from 'framer-motion';
import styles from './Gallery.module.css';


export default function Gallery({ scrollY, fadeEnd }) {
  const opacity = scrollY > fadeEnd ? 1 : 0;

  return (
    <motion.div
    className={styles.gallery}
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
    />
  );
}
