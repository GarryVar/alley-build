import { Link } from "react-router-dom"; // Используем Link для переходов
import { projects } from "../AlleyPortfolio/projects";

function AlleyPortfolio() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Наши проекты
      </h2>

      <div className="portfolio__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="project group"
            style={{ display: "block" }} // Ссылка ведет себя как блок, чтобы кликать по всей карточке
          >
            <div className="project__img-wrapper relative overflow-hidden rounded-lg">
              <img
                className="project__img w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="project__info p-4">
              <span className="project__label block text-xs font-bold text-indigo-600 uppercase mb-2">
                {project.label}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {project.title}
              </h3>
              <p className="project__desc text-gray-600 text-sm line-clamp-3">
                {project.desc}
              </p>
              <span className="mt-4 text-sm font-medium  inline-flex items-center">
                Подробнее →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AlleyPortfolio;
