import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./AlleyAbout.css";

import pic04 from "../../../assets/alley-building/other/area/pic04.webp";
import pic05 from "../../../assets/alley-building/other/area/pic05.webp";
import pic06 from "../../../assets/alley-building/other/area/pic06.webp";
import pic07 from "../../../assets/alley-building/other/area/pic07.webp";
import pic08 from "../../../assets/alley-building/other/area/pic08.webp";

const images = {
  wide: [
    {
      id: "Yn6L04hY730hD3",
      src: pic05,
      alt: "Укладка асфальта",
    },
    {
      id: "d0J9Vh4uGq8L4H",
      src: pic06,
      alt: "Детская зона после благоустройства",
    },
    {
      id: "xK9mP2vQ8wR7zN", // полностью уникальный ID
      src: pic07,
      alt: "Монтаж освещения и световых арок",
    },
  ],
  album: [
    {
      id: "8jMtqOhY73G7aE",
      src: pic04,
      alt: "Освещение",
    },

    {
      id: "y79MjN29KmpW1F",
      src: pic08,
      alt: "Освещение",
    },
  ],
};
function AlleyAbout() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section id="about" className="about  ">
        <div className="about__grid grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="about__text">
            <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">
              Почему выбирают нас
            </h2>
            <p className="mb-8 text-gray-600 leading-relaxed">
              Мы не просто укладываем асфальт — мы делаем дворы безопасными и
              удобными для жителей всех возрастов. Соблюдаем ГОСТ и СНиП,
              используем сертифицированные материалы и даём гарантию на работы.
            </p>
            <ol className="relative mt-10 flex flex-col gap-7">
              <span
                aria-hidden="true"
                className="absolute top-5 bottom-5 left-[19px] w-px bg-[#121216]/20"
              ></span>
              <li className="relative flex gap-5">
                <span className="text-white font-display tnum relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#71bf44] text-[14px] font-bold text-lime">
                  1
                </span>
                <div className="pt-1.5">
                  <h3 className="text-[19px] font-bold sm:text-[21px]">
                    Соблюдаем нормативы и даём гарантию.
                  </h3>
                  <p className="mt-1.5 text-[#4a4a55]">
                    Работаем строго по ГОСТ и СНиП, используем сертифицированные
                    материалы, а на все виды работ предоставляем гарантию до 3
                    лет — это снижает риски для заказчика и экономит бюджет в
                    долгосрочной перспективе.
                  </p>
                </div>
              </li>
              <li data-reveal="true" className="relative flex gap-5">
                <span className="text-white font-display tnum relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#71bf44] text-[14px] font-bold text-lime">
                  2
                </span>
                <div className="pt-1.5">
                  <h3 className="text-[19px] font-bold sm:text-[21px]">
                    Комплексный подход под задачу.
                  </h3>
                  <p className="mt-1.5 text-[#4a4a55]">
                    Реализуем проекты «под ключ»: от проектирования освещения и
                    систем автополива до изготовления и монтажа
                    металлоконструкций — не нужно координировать несколько
                    подрядчиков, сроки и качество под единым контролем.
                  </p>
                </div>
              </li>
              <li data-reveal="true" className="relative flex gap-5">
                <span className="text-white font-display tnum relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#71bf44] text-[14px] font-bold text-lime">
                  3
                </span>
                <div className="pt-1.5">
                  <h3 className="text-[19px] font-bold sm:text-[21px]">
                    Опыт на реальных объектах и понятные результаты.
                  </h3>
                  <p className="mt-1.5 text-[#4a4a55]">
                    <Link className="link" to="/portfolio">
                      В портфолио
                    </Link>{" "}
                    — завершённые проекты (например, благоустройство детского
                    парка в Симферополе, установка световых арок в Евпатории):
                    показываем фото до/после, этапы работ и технические решения,
                    чтобы заказчик сразу видел, как будет выглядеть результат.
                  </p>
                </div>
              </li>

              <li data-reveal="true" className="relative flex gap-5">
                <span className="text-white font-display tnum relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#71bf44] text-[14px] font-bold text-lime">
                  4
                </span>
                <div className="pt-1.5">
                  <h3 className="text-[19px] font-bold sm:text-[21px]">
                    Ориентируемся на разные типы заказчиков.
                  </h3>
                  <p className="mt-1.5 text-[#4a4a55]">
                    Для частных клиентов — чёткие сметы и прозрачные этапы, для
                    B2B (УК, застройщики, муниципалитеты) — исполнительная
                    документация, графики, акты, сопровождение при приёмке и
                    соответствие тендерным требованиям.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="about__gallery relative overflow-hidden rounded-xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 1 },
              }}
              className="pb-8"
            >
              {images.wide.map((i) => (
                <SwiperSlide key={i.id}>
                  <div
                    className="overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => {
                      const idx = images.findIndex((img) => img.id === i.id);
                      setActiveIndex(idx);
                      setIsOpen(true);
                    }}
                  >
                    <img
                      className="w-full  object-cover transition-transform duration-300 hover:scale-105"
                      src={i.src}
                      alt={i.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Кнопки навигации для основного слайдера (обязательно вне wrapper) */}
            <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full flex items-center justify-center  hover:shadow-lg hover:scale-110 transition-all duration-300"></div>
            <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center  hover:shadow-lg hover:scale-110 transition-all duration-300"></div>
            <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 transform z-10"></div>
          </div>

          <div className="about__gallery about__gallery--2 relative overflow-hidden rounded-xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              className="pb-8"
            >
              {images.album.map((i) => (
                <SwiperSlide key={i.id}>
                  <div
                    className="overflow-hidden rounded-xl cursor-pointer"
                    onClick={() => {
                      const idx = images.findIndex((img) => img.id === i.id);
                      setActiveIndex(idx);
                      setIsOpen(true);
                    }}
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

            {/* Кнопки навигации для основного слайдера (обязательно вне wrapper) */}
            <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full flex items-center justify-center  hover:shadow-lg hover:scale-110 transition-all duration-300"></div>
            <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center  hover:shadow-lg hover:scale-110 transition-all duration-300"></div>
            <div className="swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 transform z-10"></div>
          </div>
        </div>
      </section>

      {/* Попап */}
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

          <div className="relative  rounded-xl overflow-hidden">
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
              {images.map((i) => (
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

            <div className="popup-swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"></div>
            <div className="popup-swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"></div>
            <div className="popup-swiper-pagination absolute bottom-4 left-1/2 -translate-x-1/2 transform"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default AlleyAbout;
