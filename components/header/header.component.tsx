import styles from "./header.module.css";
import Link from "next/link";
import { IHeaderItem } from "../../models/header.model";
import HeaderItem from "./header-item/header-item.component";

const HeaderInfo: IHeaderItem[] = [
  {
    pathname: "/",
    label: "Home",
  },
  {
    pathname: "/projects",
    label: "Projects",
  },
  {
    pathname: "/skills",
    label: "Skills",
  },
  {
    pathname: "/resume",
    label: "Resume",
  },
];

function Header() {
  return (
    <header className={`${styles.header}`}>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className={`container ${styles.headerContainer}`}>
          <Link className="navbar-brand fw-bold" href="/">
            Mr KK
          </Link>
          <div className="d-flex justify-content-center" id="navbarNav">
            <ul className={styles.navItems}>
              {HeaderInfo.map((item) => (
                <HeaderItem key={item.label} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.ribbon}></div>
    </header>
  );
}

export default Header;
