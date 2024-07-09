import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"
import { Typewriter } from 'react-simple-typewriter';
 
export default function Hero() {
    
    const tech = ["FullStack Developer"]
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm VISHWANANTH ARCHUNAN</h1>
      <span  className={styles.titles}>
                <Typewriter words={tech} loop={false}
                        cursor
                        cursorStyle='..'
                        typeSpeed={150}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        cursorBlinking={false} />
                </span>
      <p className={styles.description}>
      A dedicated Full Stack Software Developer proficient in JavaScript, Reactjs & Nodejs, continuously
              exploring new technologies and frameworks to craft innovative web applications. Passionate about elegant
              solutions, obsessed with quality, and always eager to enhance the development process for optimal outcomes..
      </p>
      <a href={'https://app.luminpdf.com/viewer/668cc6ab3f33fd4e40dcda79'} target='_blank'
                    className={styles.contactBtn}>Resume</a>
      
    </div>
    <img
      src={getImageUrl("hero/image1.jpg")}
      alt="Hero image of me"
      className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  )
}
 