import { Url } from "url";
import MediaLinkItem from "../media-link-item/media-link-item.component";
import styles from "./social-media-links.module.css";
import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

export interface MediaLink {
  label: string;
  icon: JSX.Element;
  url: string;
}

const mediaLinks: MediaLink[] = [
  {
    label: "Github",
    icon: <FaGithubSquare size={50} />,
    url: "https://github.com/jeldikk",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={50} />,
    url: "https://www.linkedin.com/in/kamal-kumar-jeldi-7259b5203/",
  },
  {
    label: "Facebook",
    icon: <FaFacebookSquare size={50} />,
    url: "https://www.facebook.com/kamalkumar.jeldi",
  },
];

function SocialMediaLinks() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>connect me through</p>
      <div className={styles.iconList}>
        {mediaLinks.map((link) => (
          <MediaLinkItem key={link.label} item={link} />
        ))}
      </div>
    </div>
  );
}

export default SocialMediaLinks;
