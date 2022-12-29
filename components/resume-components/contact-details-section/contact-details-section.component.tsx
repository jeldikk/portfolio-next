import styles from "./contact-details-section.module.css";
import ResumeSectionTitle from "../resume-section-title/resume-section-title.component";
import ContactDetail from "../contact-detail/contact-detail.component";

import { AiFillMail } from "react-icons/ai";
import { BsPhoneFill, BsGlobe } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

function ContactDetailsSection() {
  return (
    <div className={styles.contactDetailsSection}>
      <ResumeSectionTitle title="Contact Me" />
      <div className={styles.contactDetails}>
        <ContactDetail value="jeldi.kamal2011@gmail.com">
          <AiFillMail size={30} style={{ margin: "5px" }} />
        </ContactDetail>
        <ContactDetail value="+91 8500869685">
          <BsPhoneFill size={30} style={{ margin: "5px" }} />
        </ContactDetail>
        <ContactDetail value="Chuttu Gunta, Guntur, India">
          <ImLocation size={30} style={{ margin: "5px" }} />
        </ContactDetail>
        <ContactDetail value="www.iamkamal.fyi">
          <BsGlobe size={30} style={{ margin: "5px" }} />
        </ContactDetail>
      </div>
    </div>
  );
}

export default ContactDetailsSection;
