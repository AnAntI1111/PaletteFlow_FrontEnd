import { motion } from 'framer-motion';
import styles from "./Circle.module.css";

export default function Circle({ scrollY, fadeStart }) {
    // Adjust opacity for a slower fade
    const fadeEnd = 600; // Match fadeEnd in index.js
    const opacity = scrollY < fadeStart ? 1 : scrollY > fadeEnd ? 0 : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
  
    const circlePositionY = scrollY < fadeStart ? `calc(105% - ${scrollY}px)` : '50%';
  
    return (
      <motion.div
        className="circle"
        style={{
          position: 'fixed',
          top: circlePositionY,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: scrollY < fadeStart ? 200 : '100%',
          height: scrollY < fadeStart ? 200 : '100vh',
          borderRadius: scrollY < fadeStart ? '50%' : '0%',
          backgroundColor: '#3498db',
          opacity: opacity,
          transition: 'all 0.5s ease',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: scrollY < fadeStart ? '1rem' : '2rem',
          fontWeight: 'bold',
        }}
      >
        Hello, I’m a Circle!
      </motion.div>
    );
  }
  