import { useState } from "react";
import styles from "./navBar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Vanshika Singh</div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Portfolio</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
    
      </ul>

      <a href="#contact" className={styles.contactBtn}>Contact Me</a>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
