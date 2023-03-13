import { MediaLink } from "../social-media-links/social-media-links.component";
import styles from "./media-link-item.module.css";

interface IMediaLinkItemProps {
  item: MediaLink;
}

function MediaLinkItem({ item }: IMediaLinkItemProps) {
  return (
    <a className={styles.container} title={item.label} href={item.url}>
      {item.icon}
    </a>
  );
}

export default MediaLinkItem;
