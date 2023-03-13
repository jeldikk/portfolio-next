import { useRouter } from "next/router";
import { SkillsSectionItem } from "../../models/skills-section.model";
import ExtraSkills from "./extra-skills/extra-skills.component";
import SkillsSectionItemComponent from "./skills-section-item/skills-section-item.component";
import styles from "./skills-section.module.css";

const data: SkillsSectionItem[] = [
  {
    imageUrl: "https://www.trio.dev/hubfs/Imported_Blog_Media/python_logo.jpg",
    title: "Python",
    desc: "worked in developing processing work flow modules and Djano framework",
    rating: 4,
    experience: "5+ Years",
    presentlyWorking: false,
  },
  {
    imageUrl:
      "https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png",
    title: "Nodejs",
    desc: "Had developed Desktop and Web Applications using Electron",
    rating: 3.5,
    experience: "4+ Years",
    presentlyWorking: true,
  },
  {
    imageUrl:
      "https://www.lambdatest.com/blog/wp-content/uploads/2018/11/JPG-2.jpg",
    title: "HTML & CSS",
    desc: "Fundamentals of any rich interface development along with HTML5 and SASS",
    rating: 4,
    experience: "7+ years",
    presentlyWorking: true,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
    title: "Bootstrap",
    desc: "Used Extensively to develop responsive wire frames and template designs",
    rating: 4,
    experience: "7+ years",
    presentlyWorking: true,
  },
  {
    imageUrl:
      "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
    title: "React",
    desc: "Worked mainly with Hook based library with Redux, Axios, Reselect, Redux-Sagas",
    rating: 4,
    experience: "4+ years",
    presentlyWorking: true,
  },
  {
    imageUrl:
      "https://www.angularjswiki.com/angular/use-ngoptimizedimage-to-improve-image-loading-performance-in-angular/featured.png",
    title: "Angular",
    desc: "A MVC Framework with stron binding with Data and Views. Presently working with Angular",
    rating: 3.5,
    experience: "2+ years",
    presentlyWorking: true,
  },
  {
    imageUrl:
      "https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png",
    title: "Nodejs Express",
    desc: "Had used Express to develop mock servers to create environments for local developments",
    rating: 3,
    experience: "3+ years",
    presentlyWorking: true,
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2560px-AWS_Simple_Icons_AWS_Cloud.svg.png",
    title: "AWS Cloud",
    desc: "Presently I am in the edge of learning different services and get some certification",
    rating: 2,
    experience: "0.5 years(Learning)",
    presentlyWorking: true,
  },
];

function SkillsSection() {
  const router = useRouter();
  const navigateToSkillsPage = () => {
    router.push("/skills");
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Skills & Learnings</h1>
      <div className="container">
        <div className="row my-2">
          {data.map((item) => (
            <div key={item.title} className="col-sm-12 col-md-3">
              <SkillsSectionItemComponent item={item} />
            </div>
          ))}
        </div>
        <ExtraSkills />
      </div>
    </section>
  );
}

export default SkillsSection;
