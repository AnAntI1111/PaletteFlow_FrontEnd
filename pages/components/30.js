import { motion } from 'framer-motion';
import styles from './30.module.css';

export default function NextContent({ scrollY, triggerStart }) {
  const translateX = scrollY > triggerStart ? '100vw' : '0vw'; // `.light` slides right
  const opacity = scrollY > triggerStart ? 1 : 0; // Next content fades in

  return (
    <div className={styles.container}>
      <motion.img
        className={styles.light}
        src="/light.png"
        style={{
          position: 'absolute',
          top: '10%',
          left: '0%',
          transform: `translateX(${translateX})`,
          transition: 'transform 1s ease',
        }}
        width={815}
      />
      <motion.div
        className={styles.nextContent}
        style={{
          opacity,
          transition: 'opacity 1s ease',
        }}
      >
        {/* Add your next content here */}
        <h1>Welcome to the Next Section!</h1>
      </motion.div>
    </div>
  );
}
