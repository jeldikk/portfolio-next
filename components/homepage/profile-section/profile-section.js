import Styles from "./profile-section.module.css";

function ProfileSection(props) {
  return (
    <div className={Styles.profileSection}>
      <h2 className={Styles.title}>About Me</h2>
      <div className={Styles.content}></div>
    </div>
  );
}

export default ProfileSection;
