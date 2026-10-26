// Layout.jsx
import Footer from "../components/Footer/Footer";
import AlleyHeader from "../components/AlleyConstruction/AlleyHeader/AlleyHeader";

function Layout({ children }) {
  return (
    <div className="page-index bg-white min-h-screen flex flex-col">
      <AlleyHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
