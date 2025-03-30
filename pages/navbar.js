import Link from "next/link"; // ใช้ Link ของ Next.js สำหรับ Navigation
import styles from "./navbar.module.css"; // ไฟล์ CSS แยก
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className={styles.border}>
      <div className={styles.first}>
        <nav className={styles.navbar}>

          <div className={styles.logo}>
            <a href="#">
                <img src="/PaletteFlow.png" width={190} />
            </a>
          </div>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.i}>I</li>
            <li className={styles.navItem}>
              <Link href="/about">About us</Link>
            </li>
          </ul>

          <div className={styles.socialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </div>

        </nav>
        </div>
    </div>
  );
}
