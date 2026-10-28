import styles from "./AlleyHero.module.css";
// import hero01 from "../../../assets/alley-building/hero01.webp";
// import hero01 from "../../../assets/alley-building/hero01.png";
import { Link } from "react-router-dom";

function AlleyHero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.HeroWrapper}>
        {/* Картинка как фон-слой */}
        <div className={styles.HeroImageLayer}>
          {/* <img
            src={hero01}
            alt="Занимаемся благоустройством общественных пространств и уличных территорий"
            className={styles.HeroImg}
          /> */}
        </div>
        {/* Текст поверх картинки */}
        <div className={styles.HeroContent}>
          <h1
            data-aos="fade"
            data-aos-duration="800"
            className={styles.HeroTitle}
          >
            <span>Аллея‑Строй</span> <br />
            делаем город лучше.
          </h1>
          <p
            data-aos="fade"
            data-aos-duration="800"
            className={styles.HeroSubtitle}
          >
            Проектируем и благоустраиваем любые территории — от детской площадки
            до микрорайона!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AlleyHero;
