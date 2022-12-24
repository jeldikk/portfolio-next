import SocialMediaLinks from "../social-media-links/social-media-links.component";
import styles from "./right-content.module.css";

function RightIntroductionContent() {
  return (
    <div className={styles.container}>
      <h2 className="text-center">About</h2>
      <div className={styles.experience}>
        <p className={styles.totalExperience}>
          A Passionate Web Developer with 9+ years of total experience who can
          speak 5+ languages by code and had working experience with modern
          frontend and web frameworks.
        </p>
        <p className={styles.frontendExperience}>
          Now, I am working as a Senior UI Developer playing heavily with
          Bootstrap, Material UI, Prime NG complemented with React and Angular
          Frontend Frameworks for developing web applications. I also use
          Electron Framework to develop Desktop Applications & Mobile
          applications using Expo Powered React Native Framework.
          <br />I am aspiring to become a full stack cloud native developer.
        </p>
        <p className={styles.jobExpectations}>
          Apart from this, I also like travelling places( with in India ) and
          experience new forms of life.
        </p>
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default RightIntroductionContent;
