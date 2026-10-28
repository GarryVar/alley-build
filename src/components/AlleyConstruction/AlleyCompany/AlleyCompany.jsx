import pic01 from "../../../assets/alley-building/other/area/pic01.webp";
import pic02 from "../../../assets/alley-building/other/area/pic02.webp";
import pic03 from "../../../assets/alley-building/other/area/pic03.webp";
import poliv from "../../../assets/alley-building/other/water/autopoliv.jpg";
import autopoliv from "../../../assets/alley-building/other/water/autopoliv2.png";
import autopoliv02 from "../../../assets/alley-building/other/water/autopoliv03.jpg";

import metalPic09 from "../../../assets/alley-building/other/area/pic09.webp";
import metalPic10 from "../../../assets/alley-building/other/area/pic10.webp";
import metalPic11 from "../../../assets/alley-building/other/area/pic11.webp";
import metalPic12 from "../../../assets/alley-building/other/area/pic12.webp";
import metalPic13 from "../../../assets/alley-building/other/area/pic13.webp";

import lightPic14 from "../../../assets/alley-building/other/area/light01.webp";

import styles from "./AlleyCompany.module.css";

function AlleyCompany() {
  const items = [
    {
      side: "left",
      images: [pic01, pic02, pic03],
      alt: "Благоустройство территории",
      caption: "Комплексное благоустройство общественных пространств",
      text: "Наша компания реализует комплексные решения в сфере благоустройства общественных территорий, а также специализируется на производстве и изготовлении металлоконструкций, укладке уличной и тротуарной плитки, системах полива и освещения. Мы охватываем полный цикл работ — от проектирования до финальной реализации.",
      text2:
        "«Аллея‑Строй» выполняет полный цикл благоустройства: от проекта до финальной реализации. Мы берём на себя все этапы — от замеров и расчётов до монтажа, пусконаладки и передачи исполнительной документации. Такой подход исключает разрывы между проектированием и стройкой: ответственность за результат остаётся у одной команды. В наших проектах мы делаем:",
    },

    {
      side: "left",
      images: [poliv, autopoliv, autopoliv02],
      alt: "Проектирование и установка систем автополива",
      caption: "Установка системы автополива",
      orderList: [
        "🗺️ Схема трасс и расстановка оросителей с учётом перекрытия зон;",
        "💧 Гидравлический расчёт для подбора диаметров труб и количества зон;",
        "📋 Спецификация оборудования и смета;",
        "🛠️ Монтажные узлы и рекомендации по эксплуатации.",
      ],
      text: "«Аллея‑Строй» проектирует и монтирует системы автополива как часть комплексного благоустройства. Мы не ставим типовые решения «по квадратам» — каждый проект начинается с обследования участка и расчёта реальных параметров: давления, расхода, перепадов высот. В проект входит:",
      text2:
        "При монтаже соблюдаем глубину укладки труб (30–40 см), используем компрессионные фитинги и влагозащищённые соединения. Кабельные линии прокладываем в гофре, чтобы исключить повреждения при обслуживании. Пусконаладка включает промывку системы, проверку герметичности, настройку контроллера и калибровку форсунок. По итогу передаём исполнительную схему и инструкцию по сезонному обслуживанию (включая консервацию на зиму).",
    },
    {
      side: "right",
      images: [metalPic09, metalPic10, metalPic11, metalPic12, metalPic13],
      alt: "Металлоконструкции",
      caption: "Металлоконструкции для городской среды",
      text: "Изготавливаем столбы для освещения, люки, урны, ограждения и любые другие металлоконструкции.  Процесс происходит на лазерных станках: точность до долей миллиметра, ровные кромки, минимум ручной доработки. Такой подход позволяет нам гарантировать, что каждое изделие идеально подходит под проект и не требует подгонки на объекте. Дополнительно предлагаем гравировку на металле: нанесём ваш логотип, фирменный узор или любой выбранный рисунок строго по макету. Мы подбираем параметры гравировки под тип и толщину металла, чтобы изображение получилось чётким и долговечным — даже при эксплуатации на улице в сложных погодных условиях. Работаем по индивидуальным заказам: если у вас есть только идея или набросок, поможем адаптировать его в рабочий чертёж, рассчитать нагрузку и подобрать оптимальную марку стали. Монтаж выполняем своими силами — так мы несём ответственность за результат от чертежа до установки на объекте. Производство и монтаж — в связке: это экономит время, исключает ошибки передачи данных между подрядчиками и даёт единую гарантию на изделие и его установку.",
      text2: "",

      orderList: [
        "⚡ Лазерная резка: точность до долей мм, минимум ручной доработки",
        "⚙️ Гравировка на металле под тип и толщину листа",
        "🏗️ Полный цикл: проектирование, производство, монтаж",
        "🛡️ Единая гарантия на изделие и установку",
      ],
    },

    {
      side: "left",
      images: [lightPic14],
      alt: "Освещение и световые сценарии",
      caption: "Проектирование и монтаж освещения",
      text: "В спектр наших услуг входят проектирование световых сценариев и монтаж систем освещения — чтобы пространство было не только функциональным, но и комфортным для людей. Наша задача — детально разобрать запрос клиента и сопровождать проект на всех стадиях.",
      text2: "",
    },
  ];

  return (
    <section className={`${styles.Company} bg-gray-50`}>
      <div
        className={`${styles.Wrapper} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {/* <div className={` ${styles.TitleContainer} text-center`}>
          <h1
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="200"
            className="text-4xl font-bold text-gray-900"
          >
            ООО «Аллея‑Строй»
          </h1>
        </div> */}

        {/* <p
          className={`${styles.Description} text-lg font-light px-2 py-1 rounded text-justify text-gray-600 mb-12`}
        >
          Мы — динамично развивающаяся компания из Евпатории (Республика Крым),
          которая объединяет производство и комплексное благоустройство. В нашем
          профиле — металлоконструкции любой сложности: от прочных люков с
          индивидуальным рисунком или логотипом до стильных урн и нестандартных
          конструкций. Каждое изделие отличается долговечностью и продуманной
          интеграцией в ландшафт или архитектурный ансамбль — чтобы объект не
          просто служил, а органично вписывался в пространство. Отдельное
          направление — системы автополива: мы подбираем и адаптируем решения
          под особенности конкретного участка, чтобы уход за территорией был
          проще, а результат — стабильным. Мы не просто выполняем работы, а
          решаем задачи клиента: от проектирования до финальной реализации, с
          контролем качества на каждом этапе.
        </p> */}

        {items.map((item, idx) => {
          const isGallery = item.images.length > 1;
          const pictureOrderClass = idx % 2 === 0 ? "lg:order-1" : "lg:order-2";
          const textOrderClass = idx % 2 === 0 ? "lg:order-2" : "lg:order-1";

          return (
            <article
              key={idx}
              className={`${styles.Article} grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_1fr] bg-[${item.bg}] gap-5 items-start shadow-2xl rounded-2xl p-5`}
            >
              {/* Блок с текстом */}
              <div
                className={`${styles.ColText} flex flex-col justify-center ${textOrderClass}`}
              >
                <div className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                  <h2
                    data-aos="fade"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className="text-3xl font-bold text-center text-gray-800 mb-4 text-justify"
                  >
                    {item.caption}
                  </h2>

                  <p
                    data-aos="fade"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    className={`${styles.AlleyCompany} text-justify`}
                  >
                    {item.text}
                  </p>

                  {/* Рендер списка, только если orderList существует и не пустой */}
                  {item.orderList && item.orderList.length > 0 && (
                    <ul
                      className={`${styles.AlleyCompanyOrdersList} mt-4 pl-5 space-y-2 text-gray-600`}
                    >
                      {item.orderList.map((line, i) => (
                        <li key={i}>
                          <div className={styles.OrderListIcon}>
                            {line.slice(0, 2)}
                          </div>
                          {line.slice(2).trim()}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Рендер text2, только если он существует и не пустая строка */}
                  {item.text2 && item.text2.trim() !== "" && (
                    <p
                      data-aos="fade"
                      data-aos-duration="700"
                      data-aos-delay="200"
                      className="mt-4 text-gray-600"
                    >
                      {item.text2}
                    </p>
                  )}
                </div>
              </div>

              {/* Блок с картинкой/галереей */}
              <div
                className={`${styles.Gallery} rounded-lg group relative ${pictureOrderClass}`}
              >
                {
                  <div className={`${styles.GalleryWrapper} gap-8 p-1`}>
                    {item.images.map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={item.alt}
                        loading="lazy"
                        data-aos="fade"
                        data-aos-duration="700"
                        data-aos-delay="200"
                        className={`${item.animation} w-full object-cover rounded-lg transition-transform duration-500`}
                      />
                    ))}
                  </div>
                }
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default AlleyCompany;
