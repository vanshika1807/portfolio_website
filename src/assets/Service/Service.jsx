import styles from "./Service.module.css";
import { FaVideo, FaMobileAlt, FaDesktop, FaCode } from "react-icons/fa";

const services = [
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop App Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
  {
    icon: <FaCode />,
    title: "Programming Languages",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.heading}>SERVICES</h2>
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
