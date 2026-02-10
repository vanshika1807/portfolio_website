import { useState } from "react";
import styles from "./Portfolio.module.css";
import DBSentinel from '../../assets/Portfolio/DB_Sentinel_IMG.png';
import StreamPlus from '../../assets/Portfolio/StreamPlus.png';
import OPERO from '../../assets/Portfolio/OPERO.png';
import Website from '../../assets/Portfolio/Website.png';
import FIBO from '../../assets/Portfolio/FIBO.png';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const projects = {
    mobile: [
      {
        id: 1,
        title: "DB Sentinel",
        description:
          "It is real-time MySQL Database Monitoring Dashboard built with ...",
        image: DBSentinel,
        github: "https://github.com/vanshika1807/DB_Sentinel",
      },
      {
        id: 2,
        title: "StreamPlus +",
        description:
          "This is a video streaming API. Can be integrated into any ...",
        image: StreamPlus,
        github: "https://github.com/vanshika1807/StreamPlus",
      },
    ],
    website: [
      {
        id: 3,
        title: "Expense +",
        description: "Sample website project description...",
        image: "./ExpensePlus.png",
      },
    ],
    desktop: [{
        id: 3,
        title: "OPERO",
        description: "Opero is a tool that can helps the support teams in Orchestrating ...",
        image: OPERO,
        github: "https://github.com/vanshika1807/Opero",
      },
    {
        id: 4,
        title: "FIBO Hackathon Project",
        description: "Java-based custom database management system project...",
        image: FIBO,
        github: "https://github.com/vanshika1807/DB_Sentinel_FIBO",
      },],
    other: [{
        id: 5,
        title: "Resume Website",
        description: "This is my portfolio website...",
        image: Website,
        github: "https://github.com/vanshika1807/portfolio_website",
      },],
  };

  return (
    <section className={styles.portfolio} id="projects">
      <h2>PROJECTS</h2>
      <div className={styles.tabs}>
        <button
          className={activeTab === "mobile" ? styles.active : ""}
          onClick={() => setActiveTab("mobile")}
        >
          Useful API
        </button>
        {/* <button
          className={activeTab === "website" ? styles.active : ""}
          onClick={() => setActiveTab("website")}
        >
          CRUD Websites
        </button> */}
        <button
          className={activeTab === "desktop" ? styles.active : ""}
          onClick={() => setActiveTab("desktop")}
        >
          Hackathon
        </button>
        <button
          className={activeTab === "other" ? styles.active : ""}
          onClick={() => setActiveTab("other")}
        >
          Other Projects
        </button>
      </div>

      <div className={styles.projects}>
        {projects[activeTab].length > 0 ? (
          projects[activeTab].map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.text}>
                <h3>PROJECT {project.id}</h3>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
>
  <span>→</span> View on GitHub
</a>

              </div>
              <div className={styles.image}>
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noProjects}>No projects available.</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
