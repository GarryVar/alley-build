import { Link } from "react-router-dom";
import styles from "./AlleyHero.module.css";

function AlleyHero() {
    return (
        <section className={styles.Hero}>
            <h1 className={styles.HeroTitle}>Ремонт и реставрация дворов, детских площадок, парков.</h1>
            <p className={styles.HeroSubtitle}>Комплексное благоустройство дворовых территорий: асфальтирование, резиновое покрытие, монтаж оборудования и малые архитектурные формы. Работаем с УК, ТСЖ и администрацией.</p>
            <Link to="/portfolio" className="btn btn--outline">Посмотреть выполненые работы</Link>
        </section>
    )
}

export default AlleyHero;