import { NavLink } from "react-router-dom";
import styles from "../AlleyHeader/AlleyHeader.module.css";

function AlleyNav({ onClose }) {
  const handleClick = () => onClose?.();
  const links = [
    { text: "Главная", href: "/" },
    {
      text: "Солнечная энергия",
      href: "https://garryvar.github.io/inverter-energy/#home",
    },
    { text: "Наши работы", href: "/portfolio" },
  ];

  return (
    <nav>
      <ul className={styles.NavMenu}>
        {links.map((i, indx) => (
          <li key={indx}>
            <NavLink
              to={i.href}
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.Link} ${styles.Active}` : `${styles.Link}`
              }
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
