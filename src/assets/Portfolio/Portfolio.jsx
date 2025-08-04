// src/Portfolio/Portfolio.jsx
import styles from './Portfolio.module.css';
import projectImg from './ExpensePlus.png';

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.projects}>
        <div className={styles.card}>
          <img src={projectImg} alt="Project" className={styles.image} />
          <h3 className={styles.projectTitle}>Expense+</h3>
          <p className={styles.description}>
            An AI-Augment Expense Tracking Solution.
          </p>
          <a href="#" className={styles.link}>Live Demo</a>
        </div>
        {/* Repeat more cards here */}
      </div>
    </section>
  );
};

export default Portfolio;
