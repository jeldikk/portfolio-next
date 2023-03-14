import ResumeSectionTitle from "../resume-section-title/resume-section-title.component";
import { BsShare } from "react-icons/bs";
import styles from "./papers-publications-section.module.css";

function PapersPublicationsSection() {
  return (
    <div className={styles.papersPublications}>
      <ResumeSectionTitle title="Papers & Publications" />
      <ul className={styles.publicationsList}>
        <li>
          Published in AGU Radioscience{" "}
          <a
            className="btn btn-link"
            href="https://agupubs.onlinelibrary.wiley.com/doi/epdf/10.1029/2019RS006883"
          >
            <BsShare />
          </a>
        </li>
        <li>
          Published in 11th{" "}
          <span title="International Radar Symposium">IRSI</span>
          <a
            className="btn btn-link"
            href="http://radarindia.com/Proceedings%20Archive/IRSI-17/050.pdf"
          >
            <BsShare />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default PapersPublicationsSection;
