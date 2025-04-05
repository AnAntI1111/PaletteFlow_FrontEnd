import { motion } from 'framer-motion';
import styles from "./Circle.module.css";

export default function Circle({ scrollY, fadeStart }) {
    const fadeEnd = 500;
    const opacity = scrollY < fadeStart ? 1 : scrollY > fadeEnd ? 0 : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    const textOpacity = scrollY > 50 ? 1 : 0; // Adjust when the text appears

    const circlePositionY = scrollY < fadeStart ? `calc(120% - ${scrollY}px)` : '50%';

    return (
      <div id="circle" style={{ height: '100vh', position: 'relative' }}>
      <motion.div
        className="circle"
        style={{
          position: 'fixed',
          top: circlePositionY,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: scrollY < fadeStart ? 200 : '140%',
          height: scrollY < fadeStart ? 200 : '140vh',
          borderRadius: scrollY < fadeStart ? '50%' : '1000px 1000px 0 0',
          background: 'linear-gradient(to top, black 70%, #444 100%)',
          opacity: opacity,
          transition: 'all 0.5s ease',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        <motion.div 
          className={styles.textContainer} 
          style={{ opacity: textOpacity, transition: 'opacity 0 s ease-in-out' }}
        >
        <img className={styles.theory} src="/theory.png" width={410} />
        <img className={styles.p} src="/p.png" width={1300} />
        </motion.div>
      </motion.div>
      </div>
    );
}
