import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ fadeEnd }) {
  const { scrollY } = useScroll(); // Get scrollY as a MotionValue
  const [currentScroll, setCurrentScroll] = useState(0);

  // Track scrollY and update state
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setCurrentScroll(v));
    return () => unsubscribe();
  }, [scrollY]);

  // Control opacity
  const opacity = currentScroll > fadeEnd ? 1 : 0;

  // Define when the .light movement should start
  const triggerScrollStart = fadeEnd + 400;
  const triggerScrollEnd = fadeEnd + 1200;

  // Now use scrollY (MotionValue) with useTransform
  const lightLeft = useTransform(
    scrollY,
    [triggerScrollStart, triggerScrollEnd],
    ["15%", "210%"]
  );

  return (
    <motion.div
      className={styles.bg}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 1,
        opacity: opacity,
        transition: "opacity 0.5s ease",
      }}
    >
      {/* Light Image with Motion */}
      <motion.img
        className={styles.light}
        src="/light.png"
        width={815}
        style={{
          position: "absolute",
          top: 0,
          left: lightLeft, // Now using MotionValue
        }}
      />

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

        <div className={styles.frame30}>
          <img className={styles.pic30} src="/pic30.png" width={550} />
        </div>
        <div className={styles.text30}>
          <img className={styles.h30} src="/h30.png" width={460} />
          <img className={styles.p30} src="/p30.png" width={400} />
        </div>
    </motion.div>
  );
}
