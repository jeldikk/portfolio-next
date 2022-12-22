import styles from "./landing-section.module.css";

function LandingSection() {
  return (
    <section className={`${styles.container}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">Here we will put title</div>
          <div className="col-md-8">Here we will put rolling images</div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
