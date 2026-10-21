import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Products.module.css";
import { products } from "./productsData.jsx";
import OrderModal from "./OrderModal";
import ProductCard from "./ProductCard";
import IconPlus from "../SvgIcons/IconPlus.jsx";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Состояния для секций инверторов
  const [isHybridLVOpen, setIsHybridLVOpen] = useState(true); // по умолчанию открыта
  const [isHybridHVOpen, setIsHybridHVOpen] = useState(true);
  const [isGridOpen, setGridOpen] = useState(true);
  const [ischargeLVOpen, setchargeLVOpen] = useState(true);

  const { invertors, chargings, panels } = products;

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (invertors.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">В этой категории пока нет товаров.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className={`${styles.products} container mx-auto px-4`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Наши товары
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Подбираем оборудование под ваши задачи: от резервного питания до
          полной автономии.
        </p>

        <div className={styles.productsWrapper}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Инверторы
          </h3>

          <div className={styles.pruductsWrapperType}>
            {/* Гибридные LV */}
            <div className={styles.productType}>
              <h4 className="text-2xl md:text-1xl font-bold mb-10 text-gray-800">
                <div className={styles.productTypeTitle}>
                  Гибридные (LV)
                  <button
                    className={`${styles.productTypeToggle} ${isHybridLVOpen ? styles.iconRotate : ""}`}
                    onClick={() => setIsHybridLVOpen(!isHybridLVOpen)}
                    aria-expanded={isHybridLVOpen}
                  >
                    <IconPlus />
                  </button>
                </div>
              </h4>

              <div
                className={`${styles.productGallery} ${isHybridLVOpen ? styles.galleryOpen : styles.galleryClosed}`}
              >
                <Swiper
                  style={{
                    "--swiper-navigation-size": "25px",
                    "--swiper-pagination-color": "var(--primary-brand)",
                    "--swiper-navigation-color": "var(--primary-brand)",
                    "--swiper-navigation-top-offset": "35%",
                  }}
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop
                  pagination={{ clickable: true }}
                  navigation
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="pb-8"
                >
                  {invertors.hybridLV.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      style={{
                        "--swiper-navigation-size": "25px",
                        "--swiper-pagination-color": "var(--primary-brand)",
                        "--swiper-navigation-color": "var(--primary-brand)",
                        "--swiper-navigation-top-offset": "35%",
                      }}
                    >
                      <ProductCard
                        product={product}
                        onOrderClick={handleOrderClick}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Гибридные HV */}
            <div className={styles.productType}>
              <h4 className="text-2xl md:text-1xl font-bold mb-10 text-gray-800">
                <div className={styles.productTypeTitle}>
                  Гибридные (HV)
                  <button
                    className={`${styles.productTypeToggle} ${isHybridHVOpen ? styles.iconRotate : ""}`}
                    onClick={() => setIsHybridHVOpen(!isHybridHVOpen)}
                    aria-expanded={isHybridHVOpen}
                  >
                    <IconPlus />
                  </button>
                </div>
              </h4>

              <div
                className={`${styles.productGallery} ${isHybridHVOpen ? styles.galleryOpen : styles.galleryClosed}`}
              >
                <Swiper
                  style={{
                    "--swiper-navigation-size": "25px",
                    "--swiper-pagination-color": "var(--primary-brand)",
                    "--swiper-navigation-color": "var(--primary-brand)",
                    "--swiper-navigation-top-offset": "35%",
                  }}
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop
                  pagination={{ clickable: true }}
                  navigation
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="pb-8"
                >
                  {invertors.hybridHV.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      style={{
                        "--swiper-navigation-size": "25px",
                        "--swiper-pagination-color": "var(--primary-brand)",
                        "--swiper-navigation-color": "var(--primary-brand)",
                        "--swiper-navigation-top-offset": "35%",
                      }}
                    >
                      <ProductCard
                        product={product}
                        onOrderClick={handleOrderClick}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            {/* Сетевые */}
            <div className={styles.productType}>
              <h4 className="text-2xl md:text-1xl font-bold mb-10 text-gray-800">
                <div className={styles.productTypeTitle}>
                  Сетевые
                  <button
                    className={`${styles.productTypeToggle} ${isGridOpen ? styles.iconRotate : ""}`}
                    onClick={() => setGridOpen(!isGridOpen)}
                    aria-expanded={isGridOpen}
                  >
                    <IconPlus />
                  </button>
                </div>
              </h4>
              <div
                className={`${styles.productGallery} ${isGridOpen ? styles.galleryOpen : styles.galleryClosed}`}
              >
                <Swiper
                  style={{
                    "--swiper-navigation-size": "25px",
                    "--swiper-pagination-color": "var(--primary-brand)",
                    "--swiper-navigation-color": "var(--primary-brand)",
                    "--swiper-navigation-top-offset": "35%",
                  }}
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop
                  pagination={{ clickable: true }}
                  navigation
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="pb-8"
                >
                  {invertors.grid.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      style={{
                        "--swiper-navigation-size": "25px",
                        "--swiper-pagination-color": "var(--primary-brand)",
                        "--swiper-navigation-color": "var(--primary-brand)",
                        "--swiper-navigation-top-offset": "35%",
                      }}
                    >
                      <ProductCard
                        product={product}
                        onOrderClick={handleOrderClick}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Аккумуляторы */}
        <div className={styles.productsWrapper}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Аккумуляторы
          </h3>
          <div className={styles.pruductsWrapperType}>
            {/* АКБ LV */}
            <div className={styles.productType}>
              <h4 className="text-2xl md:text-1xl font-bold mb-10 text-gray-800">
                <div className={styles.productTypeTitle}>
                  АКБ (LV)
                  <button
                    className={`${styles.productTypeToggle} ${ischargeLVOpen ? styles.iconRotate : ""}`}
                    onClick={() => setchargeLVOpen(!ischargeLVOpen)}
                    aria-expanded={ischargeLVOpen}
                  >
                    <IconPlus />
                  </button>
                </div>
              </h4>

              <div
                className={`${styles.productGallery} ${ischargeLVOpen ? styles.galleryOpen : styles.galleryClosed}`}
              >
                <Swiper
                  style={{
                    "--swiper-navigation-size": "25px",
                    "--swiper-pagination-color": "var(--primary-brand)",
                    "--swiper-navigation-color": "var(--primary-brand)",
                    "--swiper-navigation-top-offset": "35%",
                  }}
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop
                  pagination={{ clickable: true }}
                  navigation
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="pb-8"
                >
                  {chargings.chrageLV.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      style={{
                        "--swiper-navigation-size": "25px",
                        "--swiper-pagination-color": "var(--primary-brand)",
                        "--swiper-navigation-color": "var(--primary-brand)",
                        "--swiper-navigation-top-offset": "35%",
                      }}
                    >
                      <ProductCard
                        product={product}
                        onOrderClick={handleOrderClick}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Панели */}
      <div className={styles.productsWrapper}>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Солнечные панели
        </h3>

        <div className={styles.productGallery}>
          <Swiper
            style={{
              "--swiper-navigation-size": "25px",
              "--swiper-pagination-color": "var(--primary-brand)",
              "--swiper-navigation-color": "var(--primary-brand)",
              "--swiper-navigation-top-offset": "35%",
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            loop
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-8"
          >
            {panels.map((product) => (
              <SwiperSlide
                key={product.id}
                style={{
                  "--swiper-navigation-size": "25px",
                  "--swiper-pagination-color": "var(--primary-brand)",
                  "--swiper-navigation-color": "var(--primary-brand)",
                  "--swiper-navigation-top-offset": "35%",
                }}
              >
                <ProductCard
                  product={product}
                  onOrderClick={handleOrderClick}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isModalOpen && selectedProduct && (
        <OrderModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
}

export default Products;
