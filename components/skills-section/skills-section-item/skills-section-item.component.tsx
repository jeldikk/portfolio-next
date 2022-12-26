import styles from "./skills-section-item.module.css";
import Image from "next/image";
import { SkillsSectionItem } from "../../../models/skills-section.model";

interface ISkillsSectionItemProps {
  item: SkillsSectionItem;
}

function SkillsSectionItemComponent({ item }: ISkillsSectionItemProps) {
  return (
    <div className={`card ${styles.skillsSectionItem}`}>
      <div className={`card-img-top ${styles.imageContainer}`}>
        <Image
          className={styles.skillsImage}
          fill
          src={item.imageUrl}
          alt={`${item.title} skill image`}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
      </div>
      <ul className="list-group list-group-flush text-end">
        <li className="list-group-item">{item.experience}</li>
        <li className="list-group-item">{item.rating}</li>
        {/* <li className="list-group-item">isActive</li> */}
      </ul>
      {/* <div className="card-body">
        <a href="#" className="card-link">
          Card Link
        </a>
        <a href="#" className="card-link">
          Another Link
        </a>
      </div> */}
    </div>
  );
}

export default SkillsSectionItemComponent;

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

*/
