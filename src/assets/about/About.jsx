import styles from './About.module.css';
import profileImage from './about-image.png';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Profile" />
      </div>
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I am a Full Stack Java Developer with a passion for building clean and efficient web applications. With experience in both frontend and backend technologies, I create scalable, user-focused solutions.
        </p>
        <div className={styles.buttons}>
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
