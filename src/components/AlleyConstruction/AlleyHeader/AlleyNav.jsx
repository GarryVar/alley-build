import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "../AlleyHeader/AlleyNav.module.css";
import IconMenuClose from "../../SvgIcons/IconMenuClose";
import AlleyLogo from "../AlleyLogo/AlleyLogo";
import TelegramLogo from "../../SvgIcons/TelegramLogo";
import VkLogo from "../../SvgIcons/VkLogo";

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
  const menuRef = useRef(null);
  // Этот ref передай в оверлей в AlleyHeader (см. ниже)
  const overlayRef = useRef(null);

  const [swipeState, setSwipeState] = useState({
    isSwiping: false,
    startX: 0,
    currentX: 0,
  });

  // Порог закрытия: если потянули больше этого — закрываем
  const MIN_CLOSE_DISTANCE = 80;
  // Минимальный «рывок», чтобы считать, что свайп начался (защита от случайных касаний)
  const MIN_SWIPE_START = 10;

  const handleLinkClick = () => toggleMenu();

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    setSwipeState({
      isSwiping: true,
      startX: touch.clientX,
      currentX: touch.clientX,
    });
  };

  const onTouchMove = (e) => {
    if (!swipeState.isSwiping) return;
    e.preventDefault(); // не скроллим фон во время свайпа

    const touch = e.touches[0];
    const currentX = touch.clientX;
    const diff = currentX - swipeState.startX;

    setSwipeState((prev) => ({ ...prev, currentX }));

    const menuEl = menuRef.current;
    if (menuEl) {
      // Двигаем ровно на смещение от точки старта
      menuEl.style.transform = `translateX(${diff}px)`;
      menuEl.style.transition = "none"; // отключаем CSS-анимацию во время свайпа
    }

    // Синхронизируем прозрачность оверлея с движением
    const overlayEl = overlayRef.current;
    if (overlayEl && diff > 0) {
      const opacity = Math.max(0, 1 - Math.min(1, diff / 200));
      overlayEl.style.opacity = opacity.toFixed(2);
    }
  };

  const onTouchEnd = () => {
    if (!swipeState.isSwiping) return;

    const diff = swipeState.currentX - swipeState.startX;
    const menuEl = menuRef.current;

    if (menuEl) {
      // Возвращаем CSS-анимацию для финального движения
      menuEl.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";

      if (diff >= MIN_CLOSE_DISTANCE) {
        // Закрываем: меню уезжает полностью вправо (за экран)
        menuEl.style.transform = "translateX(100%)";
        toggleMenu();
      } else {
        // Возвращаем на место (в ноль)
        menuEl.style.transform = "translateX(0)";
      }
    }

    setSwipeState({ isSwiping: false, startX: 0, currentX: 0 });
  };

  // Если меню закрыли не свайпом (например, по оверлею или крестику) — сбрасываем инлайн-стили
  useEffect(() => {
    if (!isOpen) {
      const menuEl = menuRef.current;
      if (menuEl) {
        menuEl.style.transform = "";
        menuEl.style.transition = "";
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={`${styles.Nav} ${isOpen ? styles.NavOpen : styles.NavClosed}`}
      role="navigation"
      aria-label="Главное меню"
    >
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
          {[
            { text: "Главная", href: "/" },
            { text: "Наши работы", href: "/portfolio" },
            { text: "О нас", href: "/company" },
          ].map((item) => (
            <MenuItem
              key={item.href}
              to={item.href}
              text={item.text}
              onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                    <TelegramLogo width={25} fill={"var(--color-white)"} />
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
