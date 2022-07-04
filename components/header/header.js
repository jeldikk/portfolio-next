import Link from "next/link";
import Styles from "./header.module.css";

const MenuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
  },
  {
    label: "Skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Resume",
    href: "/resume",
  },
];

function Header(props) {
  console.log({ HeaderStyles: Styles });
  console.log(Styles.navbar);
  return (
    <nav className="navbar sticky-top">
      <div className="container justify-content-center">
        <ul className={`navbar-nav ${Styles.content}`}>
          {MenuItems.map((e) => (
            <li key={e.label} className={Styles.navItem}>
              {e.href ? <Link href={e.href}>{e.label}</Link> : e.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
