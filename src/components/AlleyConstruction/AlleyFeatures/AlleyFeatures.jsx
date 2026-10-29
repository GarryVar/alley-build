function AlleyFeatures() {
  const features = [
    {
      icon: "🛣️",
      title: "Асфальтирование дворовых проездов",
      text: "Укладка асфальта с учётом стока воды, устройство бордюров и водоотводных лотков.",
    },
    {
      icon: "🧸",
      title: "Резиновое покрытие для площадок",
      text: "Безопасное покрытие из резиновой крошки: амортизация, противоскользящий эффект, долговечность.",
    },
    {
      icon: "🔧",
      title: "Ремонт и монтаж оборудования",
      text: "Замена и установка качелей, горок, балансиров, турников и других элементов с учётом возраста детей",
    },
    {
      icon: "🌿",
      title: "Малые архитектурные формы и озеленение",
      text: "Лавочки, урны, ограждения, освещение, высадка кустарников и газонов",
    },
  ];

  return (
    <section
      id="features"
      className="features max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Что мы делаем
      </h2>
      <div className="features__grid">
        {features.map((i, indx) => (
          <article className="feature" key={indx}>
            <div className="feature__icon">{i.icon}</div>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AlleyFeatures;
