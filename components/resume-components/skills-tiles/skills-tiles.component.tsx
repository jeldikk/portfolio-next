import styles from "./skills-tiles.module.css";
import {
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiFirebase,
  SiAmazonaws,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
function SkillsTiles() {
  return (
    <div className={styles.skillsTiles}>
      <SiPython className={styles.skillIcon} />
      <SiNodedotjs className={styles.skillIcon} />
      <SiHtml5 className={styles.skillIcon} />
      <SiCss3 className={styles.skillIcon} />
      <SiJavascript className={styles.skillIcon} />
      <SiTypescript className={styles.skillIcon} />
      <SiBootstrap className={styles.skillIcon} />
      <SiFirebase className={styles.skillIcon} />
      <SiAmazonaws className={styles.skillIcon} />
      <SiExpress className={styles.skillIcon} />
      <SiMongodb className={styles.skillIcon} />
    </div>
  );
}

export default SkillsTiles;
