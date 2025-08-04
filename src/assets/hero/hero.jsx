import styles from './Hero.module.css';
import heroImage from '../../assets/hero/hero-image.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-text']}>
        <h1>
          I am a <br />
          <span>Full Stack Software Developer</span>
        </h1>
        <p>
          I design and build modern web & mobile applications with beautiful UIs and efficient backends.
        </p>
        <button className={styles.btn}>Recent Projects</button>
      </div>
      <img src={heroImage} alt="Hero" />
    </section>
  );
};

export default Hero;
