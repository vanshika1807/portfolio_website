import styles from "./Service.module.css";
/*import {FaDesktop} from "react-icons/fa";*/
/*import { SiCognizant } from "react-icons/si";*/


const services = [
  {
    /*icon: <SiCognizant /> ,*/
    
    title: "Cognizant",
    role: "Junior Software Engineer | System Operations Engineer-3",
    subtitle: "May 2024 - Present",
    description:
      "For a US banking client, I have acted as a first point of contact ensuring fast triage and restoration within defined SLAs.",
  },
  {
    /*icon: <SiCognizant />,*/
    title: "Cognizant",
    role: "Programmer Analyst Trainee",
    subtitle: "September 2023 - May 2024",
    description:
      "Gained hands-on exposure to application operations, incident workflows, and SDLC practices in an enterprise environment.",
  },
  {
    /*icon: <FaDesktop />,*/
    
    title: "AICTE",
    role: "Intern",
    subtitle: "January 2023 - May 2023",
    description:
      "Acquired foundational experience in Java application development, backend services, and collaborative project execution",
  },
  /*{
    icon: <FaCode />,
    title: "Programming Languages",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },*/
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.heading}>EXPERIENCE</h2>
      <div className={styles.cardGrid}>
        {services.map((service, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <h5>{service.role}</h5>
            <h6>{service.subtitle}</h6>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
