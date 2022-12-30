import styles from "./resume-header.module.css";

function ResumeHeader() {
  return (
    <div className={styles.resumeHeader}>
      <h1 className={styles.title}>J Kamal Kumar</h1>
      <p className={styles.subTitle}>Web Developer & System Engineer</p>
    </div>
  );
}

export default ResumeHeader;
