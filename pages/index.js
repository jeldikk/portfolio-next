import Styles from "../styles/homepage.module.css";
import LandingSection from "../components/homepage/landing-section/landing-section";
import ProfileSection from "../components/homepage/profile-section/profile-section";
import SkillsSection from "../components/homepage/skills-section/skills-section";

function HomePage(props) {
  return (
    <div className={Styles.homepage}>
      <LandingSection />
      <ProfileSection />
      <SkillsSection />
    </div>
  );
}

export default HomePage;
