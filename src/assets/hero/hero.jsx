import styles from './Hero.module.css';
import heroImage from '../../assets/hero/hero-image.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-text']}>
        <h1>
          I am a <br />
          <span>System Ops Engineer</span>
        </h1>
        <p>
          I am trying to be a tech geek, passionate about learning new tech stack, cloud-native projects, and AI tools.
        </p>
        <button className={styles.btn} onClick={() => window.open("https://github.com/vanshika1807", "_blank")} >Recent Projects</button>
      </div>
      <img src={heroImage} alt="Hero" />
    </section>
  );
};

export default Hero;
