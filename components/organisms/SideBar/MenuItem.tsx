const cx = require("classnames");
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon:
    | "overview"
    | "messages"
    | "transactions"
    | "card"
    | "rewards"
    | "settings"
    | "logout";
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href = "/" } = props;

  const menuActive = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={menuActive}>
      <div className="me-3">
        <Image
          src={`/icon/sidebar/ic-menu-${icon}.svg`}
          width="25"
          height="25"
          alt="menu"
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
