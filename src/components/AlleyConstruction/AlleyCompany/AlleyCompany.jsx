import pic01 from "../../../assets/alley-building/other/area/pic01.webp";
import pic02 from "../../../assets/alley-building/other/area/pic02.webp";
import pic03 from "../../../assets/alley-building/other/area/pic03.webp";
import styles from "./AlleyCompany.module.css";

function AlleyCompany() {
  const items = [
    {
      side: "left",
      images: [pic01, pic02, pic03],
      alt: "Благоустройство территории",
      caption: "Комплексное благоустройство общественных пространств",
      text: "Наша компания реализует комплексные решения в сфере благоустройства общественных территорий, а также специализируется на производстве и изготовлении металлоконструкций, укладке уличной и тротуарной плитки, системах полива и освещения. Мы охватываем полный цикл работ — от проектирования до финальной реализации.",
    },
    {
      side: "right",
      images: [
        "/images/about-2.jpg",
        "/images/about-3.jpg",
        "/images/about-4.jpg",
      ],
      alt: "Металлоконструкции",
      caption: "Производство и монтаж металлоконструкций",
      text: "Металлоконструкции, которые мы создаём, отличаются прочностью, долговечностью и продуманной интеграцией в ландшафт или архитектурный ансамбль. Отдельное направление — системы автополива: мы подбираем и адаптируем решения под особенности конкретного участка.",
    },
    {
      side: "left",
      images: ["/images/about-5.jpg"],
      alt: "Освещение и световые сценарии",
      caption: "Проектирование и монтаж освещения",
      text: "Помимо этого, в спектр наших услуг входят проектирование световых сценариев и монтаж систем освещения — чтобы пространство был не только функциональным, но и комфортным для людей. Наша задача — детально разобрать запрос клиента и сопровождать проект на всех стадиях.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div
        className={`${styles.AlleyCompanyWrapper} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            ООО «Аллея‑Строй»
          </h1>
        </div>

        <p
          className={`${styles.AlleyCompanyDesc} text-xl font-medium px-2 py-1 rounded text-justify text-gray-600 mb-12`}
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
        </p>

        {items.map((item, idx) => {
          const isGallery = item.images.length > 1;
          // На мобильных порядок по умолчанию (текст после картинки в DOM),
          // на планшетах+ делаем чередование через order.
          const pictureOrderClass = idx % 2 === 0 ? "lg:order-1" : "lg:order-2";
          const textOrderClass = idx % 2 === 0 ? "lg:order-2" : "lg:order-1";

          return (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_1fr] gap-8 items-start bg-white shadow-2xl rounded-2xl p-10"
            >
              {/* Блок с текстом */}
              <div className={`flex flex-col justify-center ${textOrderClass}`}>
                <div className="text-lg text-gray-600 max-w-3xl text-justify leading-relaxed ">
                  {/* Заголовок можно вынести отдельно или оставить здесь */}
                  <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Благоустройство общественных территорий
                  </h2>
                  {item.text}
                </div>
              </div>

              {/* Блок с картинкой/галереей */}
              <div
                className={`${styles.AlleyCompanyPicture} rounded-lg group relative ${pictureOrderClass}`}
              >
                {isGallery ? (
                  <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1">
                    {item.images.map((imgSrc, i) => (
                      <img
                        key={i}
                        src={imgSrc}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                      />
                    ))}
                  </div>
                ) : (
                  <>
                    <img
                      src={item.images[0]}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-sm font-medium text-white bg-black/60 px-2 py-1 rounded">
                        {item.caption}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AlleyCompany;
