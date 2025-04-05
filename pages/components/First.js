import { motion } from "framer-motion";
import styles from "./First.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function First({ scrollY, fadeStart, fadeOutStart }) {
    const isInverted = scrollY >= fadeStart;

    const fadeOut = scrollY >= fadeOutStart; // เริ่มจางหายเมื่อ scrollY มากกว่า fadeOutStart

    return (
        <section id="first" style={{ height: '100vh' }}>
        <div>
            {/* Background Section */}
            <div className={styles.background}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
            </div>

            {/* Section สำหรับรูป */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faChevronDown} />

                <motion.div
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 10, 0] }} 
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </motion.div>
                </div>
                
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
        </section>
    );
}
