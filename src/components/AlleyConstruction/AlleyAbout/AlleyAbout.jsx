import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "../../AnimationOnScroll/AnimationOnScroll";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./AlleyAbout.css";

// --- Импорты картинок ---
import pic04 from "../../../assets/alley-building/other/area/pic04.webp";
import pic05 from "../../../assets/alley-building/other/area/pic05.webp";
import pic06 from "../../../assets/alley-building/other/area/pic06.webp";
import pic07 from "../../../assets/alley-building/other/area/pic07.webp";
import pic08 from "../../../assets/alley-building/other/area/pic08.webp";

// --- Данные ---
const GALLERY_IMAGES = [
  { id: "Yn6L04hY730hD3", src: pic05, alt: "Укладка асфальта" },
  {
    id: "d0J9Vh4uGq8L4H",
    src: pic06,
    alt: "Детская зона после благоустройства",
  },
  { id: "xK9mP2vQ8wR7zN", src: pic07, alt: "Монтаж освещения и световых арок" },
  { id: "8jMtqOhY73G7aE", src: pic04, alt: "Освещение" },
  { id: "y79MjN29KmpW1F", src: pic08, alt: "Освещение" },
];

const WIDE_IMAGES = GALLERY_IMAGES.slice(0, 3);
const ALBUM_IMAGES = GALLERY_IMAGES.slice(3);

function AlleyAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Исправленная функция: принимаем id
  const openLightbox = (string) => {
    const idx = GALLERY_IMAGES.findIndex((img) => img.id === id);
    if (idx !== -1) {
      setActiveIndex(idx);
      setIsOpen(true);
    }
  };

  const benefits = [
    {
      num: 1,
      title: "Соблюдаем нормативы и даём гарантию.",
      text: "Работаем строго по ГОСТ и СНиП, используем сертифицированные материалы, а на все виды работ предоставляем гарантию до 3 лет — это снижает риски для заказчика и экономит бюджет в долгосрочной перспективе.",
    },
    {
      num: 2,
      title: "Комплексный подход под задачу.",
      text: "Реализуем проекты «под ключ»: от проектирования освещения и систем автополива до изготовления и монтажа металлоконструкций — не нужно координировать несколько подрядчиков, сроки и качество под единым контролем.",
    },
    {
      num: 3,
      title: "Опыт на реальных объектах и понятные результаты.",
      text: (
        <>
          <Link className="link" to="/portfolio">
            В портфолио
          </Link>{" "}
          — завершённые проекты (например, благоустройство детского парка в
          Симферополе, установка световых арок в Евпатории): показываем фото
          до/после, этапы работ и технические решения, чтобы заказчик сразу
          видел, как будет выглядеть результат.
        </>
      ),
    },
    {
      num: 4,
      title: "Ориентируемся на разные типы заказчиков.",
      text: "Для частных клиентов — чёткие сметы и прозрачные этапы, для B2B (УК, застройщики, муниципалитеты) — исполнительная документация, графики, акты, сопровождение при приёмке и соответствие тендерным требованиям.",
    },
  ];

  return (
    <>
      <section id="about" className="about">
        <div className="about__grid grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Текстовая часть */}
          <div className="about__text">
            <h2
              data-aos="fade-in-left"
              data-aos-duration="800"
              className="text-5xl font-bold text-center mb-6 text-gray-800"
            >
              Почему выбирают нас
            </h2>
            <p
              data-aos="fade-in-right"
              data-aos-duration="800"
              data-aos-delay="200"
              className="mb-8 text-gray-600 leading-relaxed"
            >
              Мы не просто укладываем асфальт — мы делаем дворы безопасными и
              удобными для жителей всех возрастов. Соблюдаем ГОСТ и СНиП,
              используем сертифицированные материалы и даём гарантию на работы.
            </p>

            <ol className="relative mt-10 flex flex-col gap-7">
              <span
                aria-hidden="true"
                className="absolute top-5 bottom-5 left-[19px] w-px bg-[#121216]/20"
              ></span>

              {benefits.map((item, i) => (
                <li key={i} data-reveal="true" className="relative flex gap-5">
                  <span
                    data-aos="fade-in-right"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className="text-white font-display tnum relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#71bf44] text-[14px] font-bold text-lime"
                  >
                    {item.num}
                  </span>
                  <div
                    data-aos="slide-left"
                    data-aos-duration="900"
                    className="pt-1.5"
                  >
                    <h3
                      data-aos="fade"
                      data-aos-duration="800"
                      className="text-[19px] font-bold sm:text-[21px]"
                    >
                      {item.title}
                    </h3>
                    <p
                      data-aos="fade-in-right"
                      data-aos-duration="500"
                      data-aos-delay="200"
                      className="mt-1.5 text-[#4a4a55]"
                    >
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Слайдер wide */}
          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
            className="about__gallery relative overflow-hidden rounded-xl"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: ".about-wide-swiper-next",
                prevEl: ".about-wide-swiper-prev",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 1 },
              }}
              className="pb-8"
            >
              {WIDE_IMAGES.map((i) => (
                <SwiperSlide key={i.id}>
                  <div
                    className="overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => openLightbox(i.id)}
                  >
                    <img
                      className="w-full object-cover transition-transform duration-300 hover:scale-105"
                      src={i.src}
                      alt={i.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Кнопки с общим классом gallery-btn */}
            <div className="gallery-btn about-wide-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10"></div>
            <div className="gallery-btn about-wide-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10"></div>
            <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 transform z-10"></div>
          </div>

          {/* Слайдер album */}
          <div
            data-aos="fade"
            data-aos-duration="500"
            data-aos-delay="800"
            className="about__gallery about__gallery--2 relative overflow-hidden rounded-xl mt-8 md:mt-0"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: ".about-album-swiper-next",
                prevEl: ".about-album-swiper-prev",
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              className="pb-8"
            >
              {ALBUM_IMAGES.map((i) => (
                <SwiperSlide key={i.id}>
                  <div
                    className="overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => openLightbox(i.id)}
                  >
                    <img
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      src={i.src}
                      alt={i.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Те же кнопки, общий класс gallery-btn — стиль одинаковый */}
            <div className="gallery-btn about-album-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-10"></div>
            <div className="gallery-btn about-album-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-10"></div>
            <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 transform z-10"></div>
          </div>
        </div>
      </section>

      {/* Лайтбокс */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 shadow-xl transition-colors duration-200"
            aria-label="Закрыть"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative rounded-xl overflow-hidden">
            <Swiper
              initialSlide={activeIndex}
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: ".popup-swiper-button-next",
                prevEl: ".popup-swiper-button-prev",
              }}
              pagination={{
                el: ".popup-swiper-pagination",
                clickable: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="h-full"
            >
              {GALLERY_IMAGES.map((i) => (
                <SwiperSlide
                  key={i.id}
                  className="flex justify-center items-center"
                >
                  <img
                    src={i.src}
                    alt={i.alt}
                    className="object-contain max-w-full max-h-[85vh] md:max-h-[90vh]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="gallery-btn popup-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2"></div>
            <div className="gallery-btn popup-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2"></div>
            <div className="popup-swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 transform"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default AlleyAbout;
