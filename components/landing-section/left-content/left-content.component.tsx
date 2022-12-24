import styles from "./left-content.module.css";
import profileAvatar from "../../../public/images/profile-avatar.jpg";
import Image from "next/image";

function LeftLandingSectionContent() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatarImage}
        src={profileAvatar}
        alt="profile avatar image"
      />
      <h2 className={`display-1 ${styles["i-am"]}`}>I AM</h2>
      <div className={styles.name}>KAMAL</div>
      <p className={styles.description}>
        A Self taught programmer, Senior UI Developer & Aspiring Full Stack
        Cloud Enthusiast. Who loves to Learn New Technologies & Develop
        applications for Friends, Fun & Food.
      </p>
    </div>
  );
}

export default LeftLandingSectionContent;
