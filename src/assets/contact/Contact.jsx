import styles from "./Contact.module.css";
import emailIcon from "./email-img.png";
import githubIcon from "./github.png";
import linkedinIcon from "./linkedin.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.heading}>CONTACT</h2>
      <div className={styles.contentWrapper}>
        {/* Left Side */}
        <div className={styles.left}>
          <h3>Drop Me a Message</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className={styles.info}>
            <div><FaPhone /> +92 8864992508</div>
            <div><FaEnvelope /> vanshika18072001@gmail.com</div>
            <div><FaMapMarkerAlt /> Hyderabad</div>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Footer */}
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
    </section>
  );
}
