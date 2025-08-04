import { useState } from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  const projects = {
    mobile: [
      {
        id: 1,
        title: "Dating Mobile App Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: "./ExpensePlus.png",
      },
      {
        id: 2,
        title: "E Commerce Mobile App Design",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: "./ExpensePlus.png",
      },
    ],
    website: [
      {
        id: 3,
        title: "Landing Page Design",
        description: "Sample website project description...",
        image: "./ExpensePlus.png",
      },
    ],
    desktop: [],
    other: [],
  };

  return (
    <section className={styles.portfolio} id="projects">
      <h2>PORTFOLIO</h2>
      <div className={styles.tabs}>
        <button
          className={activeTab === "mobile" ? styles.active : ""}
          onClick={() => setActiveTab("mobile")}
        >
          Mobile App
        </button>
        <button
          className={activeTab === "website" ? styles.active : ""}
          onClick={() => setActiveTab("website")}
        >
          Website
        </button>
        <button
          className={activeTab === "desktop" ? styles.active : ""}
          onClick={() => setActiveTab("desktop")}
        >
          Desktop
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
                <a href="#readmore">
                  <span>→</span> Read more
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
