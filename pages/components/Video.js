import styles from "./Video.module.css";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Video ({ scrollY, fadeStart }) {
    const fadeInStart = fadeStart; // เริ่ม fade หลังจาก Gallery จบ
    const fadeInEnd = fadeInStart + 300; // Fade เต็มที่หลังจาก 300px
  const opacity = scrollY < fadeInStart 
    ? 0 
    : scrollY > fadeInEnd 
      ? 1 
      : (scrollY - fadeInStart) / (fadeInEnd - fadeInStart);

  return (
    <section id="video" style={{ height: '100vh' }}>
    <div className={styles.bg} style={{ opacity }}>
            {/* Background Section */}
            <div className={styles.background}>
                <div className={styles.bar1}></div>
            </div>

                  {/* YouTube Video (ไม่หมุน) */}
            <div className={styles.videoWrapper}>
            <iframe 
                width="1903px" 
                height="750px" 
                src="https://www.youtube.com/embed/8eC2c-3iCL8?list=PLxpCY4RrF1TdMrQgCNkbS9aEqmkTOz11I" 
                title="La Moon - ละมุน (Blooming Heart) l Official MV" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            </div>

            <img className={styles.hVideo} src="/hVideo.png" width={950}/>

            <div className={styles.sSlide}>
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
            </div>

            <a href="#" target="_blank" rel="noopener noreferrer">
                <img className={styles.btn} src="/btn.png" width={590} alt="Button" />
            </a>    

            <a href="#" target="_blank" rel="noopener noreferrer">
                <img className={styles.yt_icon} src="/yt_icon.png" width={80} alt="Button" />
                <img className={styles.circle} src="/circle.png" width={230} alt="Button" />

            </a>    

            <img className={styles.easy} src="/easy.png" width={810}/>
            
          </div>
          </section>
  );
}
