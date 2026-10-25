import { NavLink, Link } from "react-router-dom";
import styles from "../AlleyHeader/AlleyNav.module.css";
import IconMenuClose from "../../SvgIcons/IconMenuClose";
import AlleyLogo from "../AlleyLogo/AlleyLogo";
import TelegramLogo from "../../SvgIcons/TelegramLogo";
import VkLogo from "../../SvgIcons/VkLogo";
import MaxLogo from "../../SvgIcons/MaxLogo";

// Вспомогательный компонент для пункта меню (убирает дублирование className)
const MenuItem = ({ to, text, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${styles.Link} ${isActive ? styles.Active : ""}`
      }
    >
      {text}
    </NavLink>
  </li>
);

function AlleyNav({ toggleMenu, isOpen }) {
  const handleClick = () => onClose?.();

  const mainLinks = [
    { text: "Главная", href: "/" },
    { text: "Наши работы", href: "/portfolio" },
    { text: "О нас", href: "/company" },
  ];

  return (
    <div
      className={`${styles.Nav} ${isOpen ? styles.NavOpen : styles.NavClosed}`}
      role="navigation"
      aria-label="Главное меню"
    >
      {/* Кнопка закрытия — в самом верху меню */}
      <button
        className={styles.NavCloseButton}
        type="button"
        aria-label="Закрыть меню"
        onClick={toggleMenu}
      >
        <IconMenuClose width={25} />
      </button>


      <nav className={styles.NavWrapper}>
        <div className={styles.NavTopBar}>
          <AlleyLogo width={180} />
        </div>

        <ul className={styles.NavMenu}>
          {mainLinks.map((item) => (
            <MenuItem
              key={item.href}
              to={item.href}
              text={item.text}
              onClick={handleClick}
            />
          ))}
        </ul>
        <div className={styles.NavInverters}>
          <div className={styles.NavMenuSeparator}>
            <p>Наши подразделения</p>
            <ul className={styles.NavMenu}>
              <MenuItem
                to="https://garryvar.github.io/inverter-energy/#home"
                text="Солнечная энергия"
                onClick={handleClick}
              />
            </ul>
          </div>
        </div>
        <div className={styles.NavBottomBar}>
          <div className={styles.NavMenuSeparator}>
            <p>Мы в соцсетях</p>
            <div className={styles.NavSocials}>
              <ul className={styles.NavMenu}>
                <li className={styles.Link}>
                  <Link to="/@telegram">
                    <TelegramLogo
                      width={25}
                      fill={"var(--color-white)"}
                    />
                  </Link>
                </li>
                <li className={styles.Link}>
                  <Link to="/@vk">
                    <VkLogo width={25} fill={"var(--color-white)"} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AlleyNav;
