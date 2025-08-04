import { useEffect } from "react";
import styles from "./App.module.css";

import NavBar from "./assets/nav/navBar";
import Portfolio from "./assets/Portfolio/Portfolio"; 
import Hero from "./assets/hero/hero";
import About from "./assets/about/About";
import Service from "./assets/Service/Service";
import Experience from "./assets/Experience/Experience";
import Contact from "./assets/contact/Contact";

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


      <Service/>

      <Experience/>
      
      <Contact/>

      {/* ✅ Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Vanshika Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
