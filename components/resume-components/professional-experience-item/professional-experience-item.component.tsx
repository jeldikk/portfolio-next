import { IProfessionDetail } from "../../../models/professional-detail.model";
import styles from "./professional-experience-item.module.css";

interface IProfessionalExperienceProps {
  detail: IProfessionDetail;
}

function ProfessionalExperienceItem({ detail }: IProfessionalExperienceProps) {
  return (
    <div className={styles.professionalExperience}>
      <div className={styles.company}>{detail.company}</div>
      <div className={styles.role}>{detail.role}</div>

      <div className={styles.duration}>
        {detail.from} - {detail.to}
      </div>
      <ul className={styles.responsiblities}>
        {detail.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfessionalExperienceItem;
