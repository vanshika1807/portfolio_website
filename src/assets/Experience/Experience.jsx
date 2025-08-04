import styles from "./Experience.module.css";
import {
  FaAws,
  FaCss3Alt,
  FaReact,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

const icons = [
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGitAlt />, name: "Git" },
];

export default function Experience() {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.heading}>EXPERIENCE</h2>
      <div className={styles.iconGrid}>
        {icons.map((item, idx) => (
          <div key={idx} className={styles.iconCard} title={item.name}>
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
