import { IconType } from "react-icons/lib";
import styles from "./contact-detail.module.css";

export interface IContactDetailsProps {
  children: JSX.Element;
  value: string;
}

function ContactDetail({ children, value }: IContactDetailsProps) {
  return (
    <div className={styles.contactDetail}>
      {children}
      <p className={styles.detail}>{value}</p>
    </div>
  );
}

export default ContactDetail;
