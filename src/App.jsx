import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import AlleyCompany from "./components/AlleyConstruction/AlleyCompany";
import AlleyPortfolio from "./components/AlleyConstruction/AlleyPortfolio/AlleyPortfolio";
import ProjectPage from "./components/AlleyConstruction/ProjectPage/ProjectPage"; // Импортируем страницу проекта

import "./index.css";
import "animate.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* Главная страница: Layout оборачивает HomePage */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* Портфолио: Layout оборачивает AlleyPortfolio */}
        <Route
          path="/portfolio"
          element={
            <Layout>
              <AlleyPortfolio />
            </Layout>
          }
        />

        <Route
          path="/company"
          element={
            <Layout>
              <AlleyCompany />
            </Layout>
          }
        />

        {/* Страница отдельного проекта: Layout оборачивает ProjectPage */}
        {/* :id — это динамический параметр. /project/1, /project/2 и т.д. */}
        <Route
          path="/project/:id"
          element={
            <Layout>
              <ProjectPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
