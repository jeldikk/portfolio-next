import Head from "next/head";
import styles from "../styles/Page404.module.css";

function PageNotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - 404 :: J Kamal Kumar</title>
      </Head>
      <div className={styles.errorPage}>
        <h1 className={`h1 ${styles.title}`}>Page Not Found</h1>
        <div className={styles.content}>404 | Please visit again</div>
      </div>
    </>
  );
}

export default PageNotFound;
