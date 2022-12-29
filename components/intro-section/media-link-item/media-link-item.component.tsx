import { MediaLink } from "../social-media-links/social-media-links.component";
import styles from "./media-link-item.module.css";

interface IMediaLinkItemProps {
  item: MediaLink;
}

function MediaLinkItem({ item }: IMediaLinkItemProps) {
  return (
    <div className={styles.container} title={item.label}>
      {item.icon}
    </div>
  );
}

export default MediaLinkItem;
