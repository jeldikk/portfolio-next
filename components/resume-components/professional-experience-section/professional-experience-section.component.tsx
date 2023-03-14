import { IProfessionDetail } from "../../../models/professional-detail.model";
import ProfessionalExperienceItem from "../professional-experience-item/professional-experience-item.component";
import styles from "./professional-experience-section.module.css";

const professionalExperiences: IProfessionDetail[] = [
  {
    company: "Mphasis Limited",
    role: "Senior Software Engineer",
    from: "April, 2021",
    to: "Present",
    responsibilities: [
      "Serving as a Senior UI Developer to one of their fintech clients for building highly scalable, robust and modular screens",
      "Responsible for modernizing their older screens with business compliant new designs and interactions",
      "Instrumental in developing Onboarding, Dashboard & Interactive Visualisation Screens",
      "Able workforce who can develop less production error codes",
      "Involved in design of web API's with backend teams",
    ],
  },
  {
    company: "National Atmospheric Research Laborary, ISRO",
    role: "Engineer - SD (Senior Level)",
    from: "Dec, 2014",
    to: "March, 2021",
    responsibilities: [
      "Focal point for In-house development of Radar Controller Sofware for India's MST Radar using python",
      "Development of supporting & associated tools for experiments & health logging",
      "Design and Development of modules and dependency libraries for data extraction and processing workflows",
      "Participated in Tutoring Python for students and research scholars",
    ],
  },
  {
    company: "Semi Conductor Laboratory, ISRO",
    role: "Engineer - SC (Junior Level)",
    from: "Oct, 2013",
    to: "Nov, 2014",
    responsibilities: [
      "Development of a web tool to visualise & track batch level and wafer level element failures from csv extracts",
      "Member of a Mask Data Preparation and learnt a tool specific language in quick preparation of mask data used in lithography",
    ],
  },
];

function ProfessionalExperienceSection() {
  return (
    <div className={styles.professionalExperienceSection}>
      {professionalExperiences.map((exp) => (
        <ProfessionalExperienceItem key={exp.company} detail={exp} />
      ))}
    </div>
  );
}

export default ProfessionalExperienceSection;
