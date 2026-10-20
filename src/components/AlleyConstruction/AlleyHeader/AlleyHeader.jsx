import { useState } from "react";
import { Link } from "react-router-dom";
import AlleyLogo from "../AlleyLogo/AlleyLogo";
import AlleyNav from "./AlleyNav";
import styles from "./AlleyHeader.module.css";
import IconMenu from "../../SvgIcons/IconMenu"; // твой SVG иконки
import IconMenuClose from "../../SvgIcons/IconMenuClose";

function AlleyHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className={styles.Header}>
      <div
        className={`${styles.HeaderWrapper} container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center`}
      >
        {/* Логотип */}
        <AlleyLogo />
        {/* Кнопка бургера (только на мобильных) */}
        <button
          type="button"
          className={`${styles.Hamburger} block md:hidden`} // md:hidden — скрывает на планшетах и выше
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <IconMenuClose /> : <IconMenu />}
        </button>
        <div
          className={`${styles.Nav} ${isOpen ? styles.NavOpen : styles.NavClosed}`}
          role="navigation"
          aria-label="Главное меню"
        >
          <AlleyNav onClose={toggleMenu} />
        </div>
      </div>
    </header>
  );
}

export default AlleyHeader;
