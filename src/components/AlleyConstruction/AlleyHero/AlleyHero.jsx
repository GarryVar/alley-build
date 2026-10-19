import { Link } from "react-router-dom";
import styles from "./AlleyHero.module.css";

import About from "../AlleyAbout/AlleyAbout";
import AlleyFeatures from "../AlleyFeatures/AlleyFeatures";
import hero01 from "../../../assets/alley-building/hero01.jpg";

function AlleyHero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.HeroWrapper}>
        {/* Картинка как фон-слой */}
        <div className={styles.HeroImageLayer}>
          <img
            src={hero01}
            alt="Благоустройство двора: детская площадка и пешеходные дорожки"
            className={styles.HeroImg}
          />
        </div>

        {/* Текст поверх картинки */}
        <div className={styles.HeroContent}>
          <h1 className={styles.HeroTitle}>
            Благоустройство уличных территорий.
          </h1>
          <p className={styles.HeroSubtitle}>
            От детских площадок до пешеходных зон — делаем городскую среду
            удобной и красивой. Рассчитаем проект под ваш бюджет и сроки.
          </p>

          {/* Пример кнопки (раскомментируй, когда добавишь Link) */}
          {/* <Link to="/portfolio" className="btn btn--outline">Посмотреть работы</Link> */}
        </div>
      </div>
    </section>
  );
}

export default AlleyHero;
