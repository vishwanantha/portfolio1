import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Link } from 'react-scroll'

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
      <Link as={Link} to="home" spy={true} smooth={true} duration={100} offset={-70}
       className="fw-bold" style={{ cursor: 'pointer',color: 'red' }}
        onTouchEnd={()=>collapseIt()}><button   className={styles.contactBtn} style={{  backgroundcolor: 'red'}}>  Home</button> </Link >
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:vishwananth5053@gmail.com">vishwananth5053@gmail.com</a>
      </li>
      
      <li className={styles.link}>
        <img
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/vishwananth-archunan-b900642a2">linkedin.com/vishwananth</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/vishwanantha/React1.git">github.com/vishwananth</a>

      </li>
    </ul>
   
  </footer>
  )
}
