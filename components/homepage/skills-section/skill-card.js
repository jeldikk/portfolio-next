function SkillCard(props) {
  const { icon, name, experience, rating } = props.skill;
  return (
    <div className="skillCard">
      <div className="icon">{icon}</div>
      <div className="skill-detail">
        <div className="name-exp">
          <div className="name">{name}</div>
          <div className="experience">{experience}</div>
        </div>
        <div className="rating">{rating}</div>
      </div>
    </div>
  );
}

export default SkillCard;
