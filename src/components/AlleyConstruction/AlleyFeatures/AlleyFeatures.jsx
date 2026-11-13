// import landScapePaving from "../../../assets/alley-building/other/area/landscape-paving.webp";
// import rubberFloor from "../../../assets/alley-building/other/area/rubber-floor.webp";
// import landscapeArchitectural from "../../../assets/alley-building/other/area/landscape-architectural.webp";
// import styles from "./AlleyFeatures.module.css";
// function AlleyFeatures() {
//   const features = [
//     {
//       img: landScapePaving,
//       title: "Мощение тротуарной плиткой",
//       text: "Долговечное покрытие с гарантией: укладываем тротуарную плитку так, чтобы двор оставался идеальным годами — грамотные уклоны не дадут воде застаиваться, бордюры надёжно зафиксируют края, а водоотводные лотки возьмут сток на себя",
//     },

//     {
//       img: rubberFloor,
//       title: "Резиновое покрытие для площадок",
//       text: "Безопасное покрытие из резиновой крошки: амортизация, противоскользящий эффект, долговечность.",
//     },
//     {
//       image: "🔧",
//       title: "Ремонт и монтаж оборудования",
//       text: "Замена и установка качелей, горок, балансиров, турников и других элементов с учётом возраста детей",
//     },

//     {
//       img: landscapeArchitectural,
//       title: "Малые архитектурные формы и озеленение",
//       text: "Лавочки, урны, ограждения, освещение, высадка кустарников и газонов",
//     },
//   ];

//   return (
//     <section
//       id="features"
//       className={`${styles.features} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
//     >
//       <h2 className="text-5xl font-bold text-center mb-10 text-gray-800">
//         Что мы делаем
//       </h2>
//       <div className={styles.grid}>
//         {features.map((i, indx) => (
//           <article className={styles.feature} key={indx}>
//             <div className={styles.image}>
//               <img src={i.img} alt="" />
//             </div>
//             <h3 className={styles.title}>{i.title}</h3>
//             <p className={`${styles.text} mt-1.5 text-[#4a4a55]`}>{i.text}</p>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default AlleyFeatures;

import landScapePaving from "../../../assets/alley-building/other/area/landscape-paving.webp";
import rubberFloor from "../../../assets/alley-building/other/area/rubber-floor.webp";
import landscapeArchitectural from "../../../assets/alley-building/other/area/landscape-architectural.webp";
import reconstructor from "../../../assets/alley-building/other/area/reconstructor.webp";
import styles from "./AlleyFeatures.module.css";

function AlleyFeatures() {
  const features = [
    {
      img: landScapePaving,
      title: "Мощение тротуарной плиткой",
      text: "Долговечное покрытие с гарантией: уклоны не дают воде застаиваться, бордюры фиксируют края, а водоотводные лотки забирают сток.",
    },
    {
      img: rubberFloor,
      title: "Резиновое покрытие для площадок",
      text: "Безопасное покрытие из резиновой крошки: амортизация, противоскользящий эффект, долговечность.",
    },
    {
      img: reconstructor,
      icon: "🔧",
      title: "Ремонт и монтаж оборудования",
      text: "Замена и установка качелей, горок, балансиров, турников и других элементов с учётом возраста детей.",
    },
    {
      img: landscapeArchitectural,
      title: "Малые архитектурные формы и озеленение",
      text: "Лавочки, урны, ограждения, освещение, высадка кустарников и газонов.",
    },
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className="text-5xl font-bold text-center mb-10 text-gray-800">
          Что мы делаем
        </h2>
        {/* <p className={styles.textSection}>
          Комплексное благоустройство дворов, детских и спортивных площадок — от
          мощения до озеленения.
        </p> */}

        <div className={styles.grid}>
          {features.map((item, indx) => (
            <article className={styles.feature} key={indx}>
              {/* Картинка или иконка — фон карточки */}
              {item.img ? (
                <div className={styles.imageWrapper}>
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
              ) : (
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{item.icon}</span>
                </div>
              )}

              {/* Затемнение для читаемости текста */}
              <div className={styles.overlay} />

              {/* Текст поверх картинки */}
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureText}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AlleyFeatures;
