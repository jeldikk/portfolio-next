import styles from "./left-content.module.css";
import profileAvatar from "../../../public/images/profile-avatar.jpg";
import Image from "next/image";
import NameLetter from "../name-letter/name-letter.component";

const nameText = [
  {
    letter: "K",
    color: "#FF0A71",
  },
  {
    letter: "A",
    color: "#D90BC3",
  },
  {
    letter: "M",
    color: "#C000F0",
  },
  {
    letter: "A",
    color: "#7A0BD9",
  },
  {
    letter: "L",
    color: "#4A01FF",
  },
];

function LeftLandingSectionContent() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatarImage}
        src={profileAvatar}
        alt="profile avatar image"
      />
      <h2 className={`display-1 ${styles["i-am"]}`}>I AM</h2>
      <div className={styles.name}>
        {nameText.map((item) => (
          <NameLetter
            key={item.letter}
            letter={item.letter}
            color={item.color}
          />
        ))}
      </div>
      <p className={styles.description}>
        A Self taught programmer, Senior UI Developer & Aspiring Full Stack
        Cloud Enthusiast. Who loves to Learn New Technologies & Develop
        applications for Friends, Fun & Food.
      </p>
    </div>
  );
}

export default LeftLandingSectionContent;
