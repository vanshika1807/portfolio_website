import styles from "./Experience.module.css";
import { SiSplunk } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import {
 
  
  FaConfluence,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaJira,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";

const icons = [
  /*{ icon: <FaAws />, name: "AWS" },*/
  /*{ icon: <FaCss3Alt />, name: "CSS3" },*/
  { icon: <SiGrafana />, name: "Grafana" },
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiSplunk  />, name: "Splunk" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaConfluence/>, name: "Confluence" },
  { icon: <FaJira/>, name: "Jira" },
];

export default function Experience() {
  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className={styles.heading}>TECH STACK & MONITORING TOOLS</h2>
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
