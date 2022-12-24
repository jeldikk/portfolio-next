import { Url } from "url";
import MediaLinkItem from "../media-link-item/media-link-item.component";
import styles from "./social-media-links.module.css";

export interface MediaLink {
  label: string;
  icon: string;
  url: string;
}

const mediaLinks: MediaLink[] = [
  {
    label: "Github",
    icon: "bi-github",
    url: "https://github.com/jeldikk",
  },
  {
    label: "LinkedIn",
    icon: "bi-linkedin",
    url: "https://www.linkedin.com/in/kamal-kumar-jeldi-7259b5203/",
  },
  {
    label: "Facebook",
    icon: "bi-facebook",
    url: "https://www.facebook.com/kamalkumar.jeldi",
  },
];

function SocialMediaLinks() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>connect me through</p>
      <div className={styles.iconList}>
        {mediaLinks.map((link) => (
          <MediaLinkItem key={link.icon} item={link} />
        ))}
      </div>
    </div>
  );
}

export default SocialMediaLinks;
