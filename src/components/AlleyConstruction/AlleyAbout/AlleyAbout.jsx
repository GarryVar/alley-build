function About() {
    return (
        <section id="about" className="about">
            <div className="about__grid">
                <div className="about__text">
                    <h2>Почему выбирают нас</h2>
                    <p>Мы не просто укладываем асфальт — мы делаем дворы безопасными и удобными для жителей всех возрастов. Соблюдаем ГОСТ и СНиП, используем сертифицированные материалы и даём гарантию на работы.</p>
                    <ul className="about__list">
                        <li className="about__item">
                            <span className="about__icon">1</span>
                            <span>Соблюдение норм безопасности для детских зон</span>
                        </li>
                        <li className="about__item">
                            <span className="about__icon">2</span>
                            <span>Гарантия на покрытие и оборудование до 2 лет</span>
                        </li>
                        <li className="about__item">
                            <span className="about__icon">3</span>
                            <span>Выезд специалиста и смета бесплатно</span>
                        </li>
                    </ul>
                </div>

                <div className="about__image">

                    <img src="https://via.placeholder.com/600x400/e0e0e0/333?text=Процесс+работ" alt="Процесс работ по благоустройству двора" />
                </div>
            </div>
        </section>
    )
}

export default About;