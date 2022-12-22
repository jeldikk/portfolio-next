import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { IHeaderItem } from "./header.model";
import HeaderItem from "./header-item.component";

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
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand fw-bold" href="#">
            Mr KK
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
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
