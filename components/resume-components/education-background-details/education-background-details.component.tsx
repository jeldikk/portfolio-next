import { IEducationDetail } from "../../../models/education-detail.model";
import EducationDetail from "../education-detail/education-detail.component";
import ResumeSectionTitle from "../resume-section-title/resume-section-title.component";
import styles from "./education-background-details.module.css";

const educationDetails: IEducationDetail[] = [
  {
    id: "graduation",
    from: "2009",
    to: "2013",
    specialization: "BTech - Avionics",
    institute: "Indian Institute of Space Science & Technology (IIST)",
  },
  {
    id: "intermediate",
    from: "2007",
    to: "2009",
    specialization: "Maths, Physics & Chemistry",
    institute: "Sri Chaitanya Raman Bhavan 1 Campus",
  },
];

function EducationBackgroundDetails() {
  return (
    <div className={styles.educationBackgroundDetails}>
      <ResumeSectionTitle title="Education Background" />
      {educationDetails.map((detail) => (
        <EducationDetail key={detail.id} detail={detail} />
      ))}
    </div>
  );
}

export default EducationBackgroundDetails;
