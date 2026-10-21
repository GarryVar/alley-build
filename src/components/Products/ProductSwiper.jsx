// ProductSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Products.module.css";

const ProductSwiper = ({ products, title, onOrderClick }) => {
    if (!products || products.length === 0) {
        return null;
    }

    return (
        <div className={styles.productsWrapper}>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
                {title}
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
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} onOrderClick={onOrderClick} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ProductSwiper;
