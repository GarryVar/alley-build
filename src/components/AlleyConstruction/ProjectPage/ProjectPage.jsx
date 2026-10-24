// src/components/AlleyConstruction/ProjectPage/ProjectPage.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { projects } from "../AlleyPortfolio/projects";
import styles from "./ProjectPage.module.css";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  // Состояние модалки
  const [modalIndex, setModalIndex] = useState(null); // null = закрыта, иначе индекс фото

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-600">Проект не найден</h1>
        <Link to="/portfolio" className="text-indigo-600 mt-4 inline-block">
          Вернуться в портфолио
        </Link>
      </div>
    );
  }

  const total = project.gallery.length;
  const current = modalIndex !== null ? project.gallery[modalIndex] : null;

  const closeModal = () => setModalIndex(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const goToPrev = () => {
    if (modalIndex !== null) {
      setModalIndex((i) => (i === 0 ? total - 1 : i - 1));
    }
  };

  const goToNext = () => {
    if (modalIndex !== null) {
      setModalIndex((i) => (i === total - 1 ? 0 : i + 1));
    }
  };

  return (
    <>
      {/* Основная страница */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-sm text-gray-600 mb-6"
        >
          ← Назад в портфолио
        </Link>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* КОЛОНКА 1: ГАЛЕРЕЯ */}
          <div className="md:sticky top-20">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Фотоотчёт проекта
            </h3>
            <div
              className={`${styles.GalleryGrid} grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2`}
            >
              {project.gallery.map((src, indx) => (
                <div
                  key={indx}
                  onClick={() => setModalIndex(indx)}
                  className="overflow-hidden rounded-lg cursor-pointer group aspect-[4/3] bg-gray-100"
                >
                  <img
                    src={src}
                    alt={`Фото проекта: ${project.title} (${indx + 1})`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* КОЛОНКА 2: ОПИСАНИЕ */}
          <div>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-3 block">
              {project.label}
            </span>
            <h1 className="text-[2.5rem] leading-none font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6">{project.desc}</p>

            <div className="grid grid-cols-2 gap-3 mb-8 pb-4 border-b border-gray-200">
              <div>
                <strong>Площадь:</strong> 420 м²
              </div>
              <div>
                <strong>Срок:</strong> 2 месяца
              </div>
              <div>
                <strong>Статус:</strong> Завершен
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
              О проекте
            </h2>
            <div>
              {project.details.map((i, indx) => (
                <p key={indx} className="text-gray-700 leading-relaxed">
                  {i}
                </p>
              ))}
            </div>

            <button className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
              Запросить смету
            </button>
          </div>
        </article>
      </section>

      {/* МОДАЛКА С НАВИГАЦИЕЙ И АНИМАЦИЕЙ */}
      {modalIndex !== null && current && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ease-out"
          style={{ opacity: 1 }} // Tailwind opacity не всегда срабатывает корректно с transition, поэтому можно оставить как есть
          onClick={handleBackdropClick}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
          aria-hidden={false}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-full md:max-w-[90vw] lg:max-w-[80vw] w-full transition-all duration-300 ease-out transform scale-100 md:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/50 hover:bg-white/70 text-gray-300 hover:text-black shadow-xl"
              aria-label="Закрыть фото"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Нумерация */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-1 rounded text-sm font-medium backdrop-blur-sm">
              Фото {modalIndex + 1} из {total}
            </div>

            {/* Стрелка ВЛЕВО */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/30 hover:bg-white/60 text-white"
              aria-label="Предыдущее фото"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Стрелка ВПРАВО */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/30 hover:bg-white/60 text-white"
              aria-label="Следующее фото"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Большая картинка */}
            <img
              src={current}
              alt="Увеличенное фото проекта"
              className="max-h-[90vh] md:max-h-[85vh] object-contain w-auto md:w-full block"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectPage;
