import { useState, useEffect } from "react";
import AlleyLogo from "../AlleyLogo/AlleyLogo";
import AlleyNav from "./AlleyNav";
import styles from "./AlleyHeader.module.css";
import IconMenu from "../../SvgIcons/IconMenu";
import IconMenuClose from "../../SvgIcons/IconMenuClose";

function AlleyHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Блокировка скролла body при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Сохраняем текущую позицию скролла, чтобы после закрытия пользователь остался там же
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace("px", ""), 10) * -1);
      }
    }

    return () => {
      // Сброс на случай размонтирования компонента
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* ОВЕРЛЕЙ (затемнение фона) */}
      {isOpen && (
        <div
          className={`${styles.Overlay} fixed inset-0 bg-black/60 z-[50] transition-opacity duration-300`}
          onClick={toggleMenu}
          aria-hidden="true"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Escape" && toggleMenu()}
        />
      )}

      <header className={`${styles.Header} z-[60]`}>
        <div
          className={`${styles.HeaderWrapper} container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center`}
        >
          {/* Логотип */}
          <AlleyLogo width={145} />

          {/* Кнопка бургера (только на мобильных) */}
          <button
            type="button"
            className={`${styles.Hamburger} block md:hidden z-[70]`}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={toggleMenu}
            aria-expanded={isOpen}
          >
            {isOpen ? <IconMenuClose width={30} /> : <IconMenu width={34} />}
          </button>
        </div>
      </header>

      {/* МЕНЮ (выезжает поверх всего, но ниже оверлея по z-index) */}
      <AlleyNav toggleMenu={toggleMenu} isOpen={isOpen} />
    </>
  );
}

export default AlleyHeader;
