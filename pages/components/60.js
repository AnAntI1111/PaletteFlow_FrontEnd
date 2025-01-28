import { motion } from 'framer-motion';
import styles from './60.module.css';

export default function sixty({ scrollY, fadeEnd }) {
  const opacity = scrollY > fadeEnd ? 0 : 1;

  return (
    <motion.div
      className={styles.sixty}
      style={{
        opacity,
        transition: 'opacity 0.5s ease',
      }}
    >
      <img className={styles.light} src="/light.png" width={815} />
      <div className={styles.frame60}>
        <img className={styles.pic60} src="/pic60.png" width={550} />
      </div>
      <div className={styles.text60}>
        <img className={styles.h60} src="/h60.png" width={460} />
        <img className={styles.p60} src="/p60.png" width={400} />
      </div>
    </motion.div>
  );
}




      
      {/* Grid Container */}
      {/* <img className={styles.light} src="/light.png" width={815} />
      <div className={styles.gallery}>
        <div className={styles.frame60}>
          <img className={styles.pic60} src="/pic60.png" width={550} />
        </div>
        <div className={styles.text60}>
          <img className={styles.h60} src="/h60.png" width={460} />
          <img className={styles.p60} src="/p60.png" width={400} />
        </div>
      </div> */}