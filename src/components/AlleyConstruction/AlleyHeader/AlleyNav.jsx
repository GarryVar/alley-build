import { NavLink } from "react-router-dom";
import styles from "../AlleyHeader/AlleyHeader.module.css";

function AlleyNav({ onClose }) {
  const handleClick = () => onClose?.();
  const links = [
    { text: "Главная", href: "/" },
    { text: "Солнечная энергия", href: "/inverters" },
    { text: "Наши работы", href: "/portfolio" },
  ];

  return (
    <nav>
      <ul className={styles.NavMenu}>
        {links.map((i) => (
          <li>
            <NavLink
              onClick={handleClick}
              className={({ isActive }) =>
                isActive
                  ? `${styles.Link} ${styles.linkActive}`
                  : `${styles.Link}`
              }
              to={i.href}
              key={i.href}
            >
              {i.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default AlleyNav;
