import Image from "next/image";
import styles from "./intro-section.module.css";
import spiderWeb from "../../public/images/spider-web.jpg";
import RightIntroductionContent from "./right-content/right-content.component";

function IntroductionSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Introduction</h1>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <figure className="figure">
              <Image
                className={`figure-img img-fluid rounded ${styles.leftImage}`}
                src={spiderWeb}
                placeholder="blur"
                alt="spider with web"
                style={{
                  objectFit: "cover",
                }}
              />
              <figcaption className="figure-caption fst-italic text-center">
                Photographed in Cherrapunji on the way to Rainbow waterfalls.
                <br />
                Did you observe the web oozing from behind the spider ..!!
              </figcaption>
            </figure>
          </div>
          <div className="col-md-8">
            <RightIntroductionContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection;
