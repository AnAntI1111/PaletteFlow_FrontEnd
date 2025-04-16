import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ scrollY , fadeStart }) {
  const [isOpen, setIsOpen] = useState(false);

  const isInverted = scrollY >= fadeStart;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <a href="#">
                <img src="/PaletteFlow.png" width={190} />
            </a>
          </div>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#">เครื่องมือ</a>
            </li>
            <li className={styles.i}>I</li>
            <li className={styles.navItem}>
              <a href="#">เกี่ยวกับเรา</a>
            </li>
          </ul>

          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </div>
        </nav>

        <img className={styles.logoM} src="/logo.png" />

        <motion.img
          className={styles.logoM}
          src="/logo.png"
          animate={{
              filter: isInverted ? "invert(1)" : "invert(0)",
          }}
          transition={{ duration: 0.5 }}
        />

        <div className={styles.hamburgerWrapper}>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
          {isOpen && (
          <div className={styles.showMenu}>
            <div className={styles.menuItem}><a href="#">เครื่องมือ</a></div>
            <div className={styles.menuItem}><a href="#">เกี่ยวกับเรา</a></div>
            <div className={styles.contactSection}>
              <p>ติดต่อเรา</p>
              <div className={styles.socialMedia}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
        )}
        </div>

        <div className={styles.border}>
          <div className={styles.first}>
          </div>
        </div>
    </div>
  );
}
