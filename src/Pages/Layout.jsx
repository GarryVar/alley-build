// import Footer from "../components/Footer/Footer";
// import AlleyHeader from "../components/AlleyConstruction/AlleyHeader/AlleyHeader";
// import { Outlet } from "react-router-dom";
// import About from "../components/AlleyConstruction/AlleyAbout/AlleyAbout";
// import AlleyFeatures from "../components/AlleyConstruction/AlleyFeatures/AlleyFeatures";
// import AlleyHero from "../components/AlleyConstruction/AlleyHero/AlleyHero";
// import AlleyPortfolio from "../components/AlleyConstruction/AlleyPortfolio/AlleyPortfolio";
// import InverterHome from "../components/InverterHome/InverterHome";

// import { Route, Routes } from "react-router-dom";

// function Layout() {
//   return (
//     <div className="bg-white min-h-screen flex flex-col">
//       <AlleyHeader />

//       <Routes>
//         <Route to="/" index element={<AlleyHero />} />
//         <Route path="/portfolio" element={<AlleyPortfolio />} />
//         <Route path="/inverters" element={<InverterHome />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default Layout;

// Layout.jsx
import Footer from "../components/Footer/Footer";
import AlleyHeader from "../components/AlleyConstruction/AlleyHeader/AlleyHeader";

function Layout({ children }) {
  return (
    <div className="page-index bg-white min-h-screen flex flex-col">
      <AlleyHeader />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
