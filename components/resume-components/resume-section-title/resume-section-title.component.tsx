import styles from "./resume-section-title.module.css";

interface IResumeSectionTitleProps {
  title: string;
}

function ResumeSectionTitle({ title }: IResumeSectionTitleProps) {
  return (
    <div className={styles.resumeSectionTitle}>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.bottomLine} />
    </div>
  );
}

export default ResumeSectionTitle;
