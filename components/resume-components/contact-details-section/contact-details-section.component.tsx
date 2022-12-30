import styles from "./contact-details-section.module.css";
import ResumeSectionTitle from "../resume-section-title/resume-section-title.component";
import ContactDetail from "../contact-detail/contact-detail.component";

import { AiFillMail } from "react-icons/ai";
import { BsPhoneFill, BsGlobe, BsGithub } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

function ContactDetailsSection() {
  return (
    <div className={styles.contactDetailsSection}>
      <ResumeSectionTitle title="Contact Me" />
      <div className={styles.contactDetails}>
        <ContactDetail value="jeldi.kamal2011@gmail.com">
          <AiFillMail className={styles.contactIcon} />
        </ContactDetail>
        <ContactDetail value="+91 8500869685">
          <BsPhoneFill className={styles.contactIcon} />
        </ContactDetail>
        <ContactDetail value="Chuttu Gunta, Guntur, India">
          <ImLocation className={styles.contactIcon} />
        </ContactDetail>
        <ContactDetail value="www.iamkamal.fyi">
          <BsGlobe className={styles.contactIcon} />
        </ContactDetail>
        <ContactDetail value="www.github.com/jeldikk">
          <BsGithub className={styles.contactIcon} />
        </ContactDetail>
      </div>
    </div>
  );
}

export default ContactDetailsSection;
