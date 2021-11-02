const cx = require("classnames");
import Link from "next/link";

export interface FooterItemProps {
  titleMenu: string;
  listMenu: string[];
}

export default function FooterItem(props: FooterItemProps) {
  const { titleMenu, listMenu } = props;
  const classWrapper = cx({
    "col-md-4": true,
    "col-12 mt-lg-0 mt-md-0 mt-25": titleMenu === "Connect" ? true : false,
    "col-md-4 col-6 mb-lg-0 mb-25": titleMenu !== "Connect" ? true : false,
  });

  return (
    <div className={classWrapper}>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{titleMenu}</p>
      <ul className="list-unstyled">
        {listMenu.map((menu, index) => (
          <li key={index} className="mb-6">
            <Link href="/">
              <a className="text-lg color-palette-1 text-decoration-none">
                {menu}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
