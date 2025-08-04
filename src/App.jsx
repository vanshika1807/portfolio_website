import { useEffect } from "react";
import styles from "./App.module.css";
import emailIcon from "./assets/contact/email-img.png";
import githubIcon from "./assets/contact/github.png";
import linkedinIcon from "./assets/contact/linkedin.png";
import NavBar from "./assets/nav/navBar";
import Portfolio from "./assets/Portfolio/Portfolio"; 
import Hero from "./assets/hero/hero";
import About from "./assets/about/About";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className={styles.container}>
      {/* ✅ Navbar */}
      <NavBar />

    
      <Hero/>

      {/* ✅ About Section */}
      {/*<section id="about" className={styles.card}>
        <h2>About Me</h2>
        <p>I am a Java Full Stack Developer passionate about sleek web apps, cloud-native projects, and AI tools. Currently at Cognizant, exploring data analytics & AI integration.</p>
      </section>*/}
      <About />

      {/* ✅ Skills Section 
      <section id="skills" className={styles.card}>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          <li>Java & Spring Boot</li>
          <li>React & Vite</li>
          <li>SQL & MySQL</li>
          <li>Docker, Azure</li>
          <li>AI Integration</li>
        </ul>
      </section> */}

      <Portfolio/>

      {/* ✅ Projects Section */}
      <section id="projects" className={styles.card}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <div className={styles.project}>
            <h3>Stream Plus</h3>
            <p>Video streaming platform with HLS & FFmpeg using Spring Boot & React.</p>
            <a href="#">View Code</a>
          </div>
          <div className={styles.project}>
            <h3>VisualizeMe</h3>
            <p>SaaS platform for creating interactive portfolios using MERN stack.</p>
            <a href="#">Live Demo</a>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section id="contact" className={styles.card}>
        <h2>Contact</h2>
        <div className={styles.contactIcons}>
          <a href="mailto:vanshika@example.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="https://github.com/vanshika1807" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/vanshika" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Vanshika Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
