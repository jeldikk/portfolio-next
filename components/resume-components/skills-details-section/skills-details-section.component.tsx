import styles from "./skills-details-section.module.css";
import ResumeSectionTitle from "../resume-section-title/resume-section-title.component";

function SkillsDetailsSection() {
  return (
    <div className={styles.professionalSkills}>
      <ResumeSectionTitle title="Skills" />
      <ul className={styles.skillsList}>
        <li>Design & Develop Responsive Screens</li>
        <li>Modernization of Older Screens</li>
        <li>Interactive Data Visualisations</li>
        <li>Skilled in Developing Onboarding Screens</li>
        <li>Data Extraction & Analysis</li>
        <li>
          Ability to work in individual environment; keeping little fuss with
          more yield
        </li>
      </ul>
    </div>
  );
}

export default SkillsDetailsSection;
