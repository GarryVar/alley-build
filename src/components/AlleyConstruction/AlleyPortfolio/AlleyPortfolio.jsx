function AlleyPortfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Наши проекты</h2>
            <div className="portfolio__grid">
                <article className="project">
                    <div className="project__img-wrapper">
                        <img className="project__img" src="https://via.placeholder.com/400x250/e0e0e0/333?text=ЖК+Уютный" alt="ЖК Уютный" />
                    </div>
                    <div className="project__info">
                        <span className="project__label">Дворовой проезд</span>
                        <h3>ЖК «Уютный»</h3>
                        <p className="project__desc">Ремонт дворового проезда, замена бордюров, устройство водоотвода. Площадь: 420 м².</p>
                    </div>
                </article>

                <article className="project">
                    <div className="project__img-wrapper">
                        <img className="project__img" src="https://via.placeholder.com/400x250/e0e0e0/333?text=Детская+площадка" alt="Детская площадка" />
                    </div>
                    <div className="project__info">
                        <span className="project__label">Детская площадка</span>
                        <h3>Дворовая зона в мкр. Северный</h3>
                        <p className="project__desc">Замена покрытия на резиновую крошку, установка новых игровых комплексов, освещение.</p>
                    </div>
                </article>
                <article className="project">
                    <div className="project__img-wrapper">
                        <img className="project__img" src="https://via.placeholder.com/400x250/e0e0e0/333?text=Комплексное+благоустройство" alt="Комплексное благоустройство" />
                    </div>
                    <div className="project__info">
                        <span className="project__label">Комплексно</span>
                        <h3>Мкр. Центральный</h3>
                        <p className="project__desc">Асфальтирование проезда, детская площадка, лавочки, урны и озеленение. Полный цикл работ.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AlleyPortfolio;