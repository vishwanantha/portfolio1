
import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

import { Link } from 'react-scroll'
export default function NavbarT() {
  const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
      <nav className={styles.navbar}>
  <a className={styles.title} href="/">
  VISHWANANTH ARCHUNAN
  </a>
  <div className={styles.menu}>
    <img
      className={styles.menuBtn}
      src={
        menuOpen
          ? getImageUrl("nav/closeIcon.png")
          : getImageUrl("nav/menuIcon.png")
      }
      alt="menu-button"
      onClick={() => setMenuOpen(!menuOpen)}
    />
      <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >

           
              <Link as={Link} to="home" spy={true} smooth={true} duration={100} offset={-70} className="fw-bold" style={{ cursor: 'pointer' }} onTouchEnd={()=>collapseIt()}>Home</Link>
              <Link as={Link} to="about" spy={true} smooth={true} duration={100} offset={-70} className="fw-bold" style={{ cursor: 'pointer' }} onTouchEnd={()=>collapseIt()}>About</Link>
              <Link as={Link} to="skills" spy={true} smooth={true} duration={100} offset={-70} className="fw-bold" style={{ cursor: 'pointer' }} onTouchEnd={()=>collapseIt()}>Skills</Link>
              <Link as={Link} to="projects" spy={true} smooth={true} duration={100} offset={-70} className="fw-bold" style={{ cursor: 'pointer' }} onTouchEnd={()=>collapseIt()}>Projects</Link>

              <Link as={Link} to="contact" 
              spy={true} smooth={true} duration={100} offset={-70}
               className="fw-bold" style={{ cursor: 'pointer' }} onTouchEnd={()=>collapseIt()}>Contact</Link>
            
            </ul>
            </div>
    </nav>
    </> 
  
  )
}
