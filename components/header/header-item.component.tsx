import Link from "next/link";
import { useRouter } from "next/router";
import { IHeaderItem } from "./header.model";

interface HeaderItemProps {
  item: IHeaderItem;
}

function HeaderItem({ item }: HeaderItemProps) {
  const { pathname } = useRouter();
  return (
    <li className="nav-item mx-5">
      <Link
        className={`nav-link ${pathname === item.pathname ? "active" : null}`}
        href={item.pathname}
      >
        {item.label}
      </Link>
    </li>
  );
}

export default HeaderItem;
