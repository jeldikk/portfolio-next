import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        Made with Nextjs and powered by vercel
      </div>
    </footer>
  );
}

export default Footer;
