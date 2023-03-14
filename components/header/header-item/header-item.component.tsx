import styles from "./header-item.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { IHeaderItem } from "../../../models/header.model";

interface HeaderItemProps {
  item: IHeaderItem;
}

function HeaderItem({ item }: HeaderItemProps) {
  const { pathname } = useRouter();
  return (
    <li className={`nav-item ${styles.headerItem}`}>
      <Link
        className={`nav-link ${
          pathname === item.pathname ? styles.active : ""
        }`}
        href={item.pathname}
      >
        {item.label}
      </Link>
    </li>
  );
}

export default HeaderItem;
