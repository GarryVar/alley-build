import styles from "./AlleyHero.module.css";
import hero01 from "../../../assets/alley-building/hero01.webp";
import { Link } from "react-router-dom";

function AlleyHero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.HeroWrapper}>
        {/* Картинка как фон-слой */}
        <div className={styles.HeroImageLayer}>
          <img
            src={hero01}
            alt="Занимаемся благоустройством общественных пространств и уличных территорий"
            className={styles.HeroImg}
          />
        </div>
        {/* Текст поверх картинки */}
        <div className={styles.HeroContent}>
          <h1 className={styles.HeroTitle}>
            «Аллея‑Строй: создаём комфортную городскую среду»</h1>
          <p className={styles.HeroSubtitle}>
            От детских площадок до пешеходных зон — делаем городскую среду
            удобной и красивой. Рассчитаем проект под ваш бюджет и сроки.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AlleyHero;
