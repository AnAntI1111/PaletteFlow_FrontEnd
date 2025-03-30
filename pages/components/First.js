import { motion } from "framer-motion";
import styles from "./First.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function First({ scrollY, fadeStart, fadeOutStart }) {
    const isInverted = scrollY >= fadeStart;

    const fadeOut = scrollY >= fadeOutStart; // เริ่มจางหายเมื่อ scrollY มากกว่า fadeOutStart

    return (
        <div>
            {/* Background Section */}
            <div className={styles.background}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
            </div>

            {/* Section สำหรับรูป */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* <img 
                    className={styles.ImgSilde} 
                    src="/silde.png" 
                    width={40}
                    animate={{ 
                        opacity: fadeOut ? 0 : 1,
                        y: fadeOut ? -50 : 0
                    }}
                    transition={{ duration: 0.2 }}
                /> */}

                <motion.div
                className={styles.slide}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                    <FontAwesomeIcon icon={faChevronDown} />
                    <FontAwesomeIcon icon={faChevronDown} />

                </motion.div>
                
                <motion.img
                    className={styles.Img60}
                    src="/60_30_10.png"
                    width={900}
                    animate={{ 
                        filter: isInverted ? "invert(1)" : "invert(0)", 
                        opacity: fadeOut ? 0 : 1,
                        y: fadeOut ? -50 : 0
                    }}
                    transition={{ duration: 0.2 }}
                />

                <motion.img
                    className={styles.ImgP}
                    src="/PaletteFlow.png"
                    width={1400}
                    animate={{ 
                        opacity: fadeOut ? 0 : 1,
                        y: fadeOut ? -50 : 0
                    }}
                    transition={{ duration: 0.2 }}
                />
            </div>    
        </div>
    );
}
