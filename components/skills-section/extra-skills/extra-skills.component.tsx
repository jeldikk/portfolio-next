import styles from "./extra-skills.module.css";
import {
  SiTypescript,
  SiFirebase,
  SiMarkdown,
  SiGithub,
  SiElectron,
  SiMongodb,
  SiDocker,
  SiRedux,
} from "react-icons/si";

const ITEM_SIZE = 100;

function ExtraSkills() {
  return (
    <>
      <h3 className="text-center">And also ...</h3>
      <div className={styles.extraSkills}>
        <SiTypescript
          className={styles.icon}
          title="Typescript: add more fun to javascript with new features"
        />

        <SiFirebase
          className={styles.icon}
          title="Firebase: Google's unique way to develop mobile and web apps seamless"
        />

        <SiRedux
          className={styles.icon}
          title="Redux: A Predictable state management system for react based applications"
        />

        <SiMarkdown
          className={styles.icon}
          title="Markdown: speacial syntax for making documentations on github"
        />

        <SiGithub
          className={styles.icon}
          title="Github: source code versioning system for large teams"
        />

        <SiElectron
          className={styles.icon}
          title="Electron: Develop desktop applications using frontend frameworks and nodejs/javascript"
        />

        <SiMongodb
          className={styles.icon}
          title="MongoDB: a NoSQL database; well suits with nodejs web apps"
        />

        <SiDocker
          className={styles.icon}
          title="Docker: useful for the world of virtualization and containerization"
        />
      </div>
    </>
  );
}

export default ExtraSkills;
