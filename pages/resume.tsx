import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Resume.module.css";
import profileImage from "../public/images/profile-avatar.jpg";
import ResumeSectionTitle from "../components/resume-components/resume-section-title/resume-section-title.component";
import ContactDetailsSection from "../components/resume-components/contact-details-section/contact-details-section.component";
import SkillsDetailsSection from "../components/resume-components/skills-details-section/skills-details-section.component";
import ResumeHeader from "../components/resume-components/resume-header/resume-header.component";

function ResumePage() {
  const printDocument = () => {
    window.print();
  };
  return (
    <>
      <Head>
        <title>Resume - jeldikk :: J Kamal Kumar</title>
      </Head>
      <div className="container">
        <div className={styles.titleBar}>
          <h3>Resume</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={printDocument}
          >
            <i className="bi bi-cloud-download-fill"></i> Save To Disk
          </button>
        </div>
        <div className={styles.resumeContainer}>
          <div className={styles.resumePaper}>
            <div className={styles.resumeBackground}>
              <ResumeHeader />
            </div>
            <div className={styles.resumeContent}>
              <div className={styles.resumeLeftContent}>
                <div className={styles.profileImageWrapper}>
                  <Image
                    className={styles.profileImage}
                    src={profileImage}
                    alt="resume profile image"
                  />
                </div>
                <ContactDetailsSection />
                <SkillsDetailsSection />
                <div className={styles.educationBackground}>
                  <ResumeSectionTitle title="Education Background" />
                </div>
              </div>
              <div className={styles.resumeRightContent}>
                <div className={styles.aboutSection}>
                  <ResumeSectionTitle title="About Me" />
                </div>
                <div className={styles.professionalExperience}>
                  <ResumeSectionTitle title="Professional Experience" />
                </div>
                <div className={styles.notableProjects}>
                  <ResumeSectionTitle title="Notable Projects" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePage;
