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
          A developer who enjoys creating things, learning on the go, and working my way toward bigger challenges.
        </p>
        <button className={styles.btn}>Recent Projects</button>
      </div>
      <img src={heroImage} alt="Hero" />
    </section>
  );
};

export default Hero;
