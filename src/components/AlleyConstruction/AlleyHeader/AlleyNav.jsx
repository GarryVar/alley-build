import { NavLink } from "react-router-dom";
import styles from "../AlleyHeader/AlleyHeader.module.css";

function AlleyNav({ onClose }) {
  const handleClick = () => onClose?.();
  const links = [
    { text: "Главная", href: "/" },
    { text: "Наши работы", href: "/portfolio" },
    {
      text: "О нас",
      href: "/company",
    },
  ];

  return (
    <nav className={styles.NavWrapper}>
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
      <div className={styles.NavMenuSeparator}>
        Наши подразделения
        <ul className={styles.NavMenu}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.Link} ${styles.Active}` : `${styles.Link}`
              }
              onClick={handleClick}
              to="https://garryvar.github.io/inverter-energy/#home"
            >
              Солнечная эннергия
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AlleyNav;
