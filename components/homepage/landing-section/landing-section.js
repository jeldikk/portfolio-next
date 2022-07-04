import Styles from "./landing-section.module.css";

function LandingSection(props) {
  console.log({ Styles });
  return (
    <section className={Styles.landingSection}>
      <div className="container">
        <div className="row">
          <div className={`col-sm-12 col-md-6`}>
            here goes the title and introduction
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            here goes the image roller
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
