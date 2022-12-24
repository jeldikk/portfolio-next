import styles from "./landing-section.module.css";
import Image from "next/image";

import backgroundImage from "../../public/images/landing-page-background.jpg";
import LeftLandingSectionContent from "./left-content/left-content.component";
import RightLandingSectionContent from "./right-content/right-content.component";

function LandingSection() {
  return (
    <section className={`${styles.container}`}>
      <div className={styles.backgroundImageContainer}>
        <Image
          src={backgroundImage}
          alt="landing-background-image"
          fill
          placeholder="blur"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.backgroundImageOverlay}></div>
      <div className={styles.textContentContainer}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <LeftLandingSectionContent />
            </div>
            <div className="col-md-6">
              <RightLandingSectionContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
