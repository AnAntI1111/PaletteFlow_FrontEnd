import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./First.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function First({ scrollY, fadeStart, fadeOutStart }) {
    const [shouldRotate, setShouldRotate] = useState(false);
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

    const isInverted = scrollY >= fadeStart;
    const fadeOut = scrollY >= fadeOutStart;

    useEffect(() => {
        // เงื่อนไข: scroll เกิน fadeStart และจอเล็ก
        if (!hasScrolledOnce && scrollY > fadeStart && window.innerWidth < 768) {
            setShouldRotate(true);
            setHasScrolledOnce(true); // เพื่อไม่ให้หมุนซ้ำ
        }
    }, [scrollY, fadeStart, hasScrolledOnce]);

    return (
        <section id="first" style={{ height: '100vh' }}>
            <div>
                {/* Background Section */}
                <div className={styles.background}>
                    <div className={styles.bar1}></div>
                    <div className={styles.bar2}></div>
                </div>

                {/* รูปและไอคอน */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <motion.div className={styles.iconContainer}
                        animate={{
                            opacity: fadeOut ? 0 : 1,
                            y: fadeOut ? -50 : 0
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <FontAwesomeIcon icon={faChevronDown} />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.img
                        className={styles.Img60}
                        src="/60_30_10.png"
                        animate={{
                            filter: isInverted ? "invert(1)" : "invert(0)",
                            opacity: fadeOut ? 0 : 1,
                            y: fadeOut ? -50 : 0,
                            // rotate: shouldRotate ? 90 : 0
                        }}
                        transition={{ duration: 0.5 }}
                    />

                    <motion.img
                        className={styles.ImgP}
                        src="/PaletteFlow.png"
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
