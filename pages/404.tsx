import styles from "../styles/Page404.module.css";

function PageNotFound() {
  return (
    <div className={styles.errorPage}>
      <h1 className={`h1 ${styles.title}`}>Page Not Found</h1>
      <div className={styles.content}>404 | Please visit again</div>
    </div>
  );
}

export default PageNotFound;
