import styles from './About.module.css';
import profileImage from './about-image.png';

const About = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/portfolio_website/Vanshika_Singh_Resume.pdf';
    link.download = 'Vanshika_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContact = () => {
    window.location.href =
      'mailto:vanshika18072001@gmail.com?subject=Portfolio%20Contact';
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageContainer}>
        <img src={profileImage} alt="Profile" />
      </div>

      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I work at the intersection of systems operations, observability, and
          reliability engineering, supporting production and non-production
          environments for enterprise applications.
        </p>

        <div className={styles.buttons}>
          <button onClick={handleDownload}>
            Download CV
          </button>

          <button onClick={handleContact}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
