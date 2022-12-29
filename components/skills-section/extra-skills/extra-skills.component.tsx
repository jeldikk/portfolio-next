import styles from "./extra-skills.module.css";
import {
  SiTypescript,
  SiFirebase,
  SiMarkdown,
  SiGithub,
  SiElectron,
  SiMongodb,
  SiDocker,
} from "react-icons/si";

const ITEM_SIZE = 100;

function ExtraSkills() {
  return (
    <>
      <h3 className="text-center">And also ...</h3>
      <div className={styles.extraSkills}>
        <span>
          <SiTypescript
            size={ITEM_SIZE}
            title="Typescript: add more fun to javascript with new features"
          />
        </span>
        <span>
          <SiFirebase
            size={ITEM_SIZE}
            title="Firebase: Google's unique way to develop mobile and web apps seamless"
          />
        </span>
        <span>
          <SiMarkdown
            size={ITEM_SIZE}
            title="Markdown: speacial syntax for making documentations on github"
          />
        </span>
        <span>
          <SiGithub
            size={ITEM_SIZE}
            title="Github: source code versioning system for large teams"
          />
        </span>
        <span>
          <SiElectron
            size={ITEM_SIZE}
            title="Electron: Develop desktop applications using frontend frameworks and nodejs/javascript"
          />
        </span>
        <span>
          <SiMongodb
            size={ITEM_SIZE}
            title="MongoDB: a NoSQL database; well suits with nodejs web apps"
          />
        </span>
        <span>
          <SiDocker
            size={ITEM_SIZE}
            title="Docker: useful for the world of virtualization and containerization"
          />
        </span>
      </div>
    </>
  );
}

export default ExtraSkills;
