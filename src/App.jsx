{
  /*import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage"; // сюда мы вынесем Hero + About + Features
import AlleyPortfolio from "./components/AlleyConstruction/AlleyPortfolio/AlleyPortfolio";
import InverterHome from "./components/InverterHome/InverterHome";

import "./index.css";
import "animate.css";

function App() {
  return (
    <BrowserRouter basename="/alley-build/">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/portfolio"
          element={
            <Layout>
              <AlleyPortfolio />
            </Layout>
          }
        />
        <Route
          path="/inverters"
          element={
            <Layout>
              <InverterHome />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/
}

// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import AlleyPortfolio from "./components/AlleyConstruction/AlleyPortfolio/AlleyPortfolio";
import InverterHome from "./components/InverterHome/InverterHome";
import ProjectPage from "./components/AlleyConstruction/ProjectPage/ProjectPage"; // Импортируем страницу проекта

import "./index.css";
import "animate.css";

function App() {
  return (
    <BrowserRouter basename="/alley-build/">
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

        {/* Инверторы */}
        <Route
          path="/inverters"
          element={
            <Layout>
              <InverterHome />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
