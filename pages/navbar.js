import Link from "next/link"; // ใช้ Link ของ Next.js สำหรับ Navigation
import styles from "./navbar.module.css"; // ไฟล์ CSS แยก
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
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
        <div className={styles.border}>
          <div className={styles.first}>
          </div>
          </div>
    </div>
  );
}
