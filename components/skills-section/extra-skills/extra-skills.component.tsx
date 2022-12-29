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
          <SiTypescript size={ITEM_SIZE} />
        </span>
        <span>
          <SiFirebase size={ITEM_SIZE} />
        </span>
        <span>
          <SiMarkdown size={ITEM_SIZE} />
        </span>
        <span>
          <SiGithub size={ITEM_SIZE} />
        </span>
        <span>
          <SiElectron size={ITEM_SIZE} />
        </span>
        <span>
          <SiMongodb size={ITEM_SIZE} />
        </span>
        <span>
          <SiDocker size={ITEM_SIZE} />
        </span>
      </div>
    </>
  );
}

export default ExtraSkills;
