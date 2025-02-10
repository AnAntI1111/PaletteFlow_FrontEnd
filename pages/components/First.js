import { motion } from "framer-motion";
import styles from "./First.module.css";

export default function First({ scrollY, fadeStart }) {
    const isInverted = scrollY >= fadeStart;

    return (
        <div>
            {/* Background Section */}
            <div className={styles.background}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
            </div>

            {/* Section สำหรับรูป */}
            <img className={styles.ImgSilde} src="/silde.png" width={30} />
            
            <motion.img
                className={styles.Img60}
                src="/60_30_10.png"
                width={600}
                animate={{ filter: isInverted ? "invert(1)" : "invert(0)" }}
                transition={{ duration: 0.5 }}
            />

            <img className={styles.ImgP} src="/PaletteFlow.png" width={1000} />
        </div>
    );
}
