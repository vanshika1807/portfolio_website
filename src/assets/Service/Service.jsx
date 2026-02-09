import styles from "./Service.module.css";
import { FaVideo, FaMobileAlt, FaDesktop, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaVideo />,
    title: "Cognizant",
    description:
      "For a US banking client, I have acted as a first point of contact ensuring fast triage and restoration within defined SLAs.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Cognizant",
    description:
      "Gained hands-on exposure to application operations, incident workflows, and SDLC practices in an enterprise environment.",
  },
  {
    icon: <FaDesktop />,
    title: "AICTE",
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
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
