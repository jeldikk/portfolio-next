import { IEducationDetail } from "../../../models/education-detail.model";
import styles from "./education-detail.module.css";

interface IEducationDetailProps {
  detail: IEducationDetail;
}

function EducationDetail({ detail }: IEducationDetailProps) {
  return (
    <div className={styles.educationDetail}>
      <div className={styles.yearRange}>
        {detail.from} - {detail.to}{" "}
        <small className={styles.degree}>({detail.id})</small>
      </div>
      <div className={styles.specialization}>{detail.specialization}</div>
      <div className={styles.institute}>{detail.institute}</div>
    </div>
  );
}

export default EducationDetail;
20;
