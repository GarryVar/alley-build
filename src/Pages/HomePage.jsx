import AlleyHero from "../components/AlleyConstruction/AlleyHero/AlleyHero";
import About from "../components/AlleyConstruction/AlleyAbout/AlleyAbout";
import AlleyFeatures from "../components/AlleyConstruction/AlleyFeatures/AlleyFeatures";

function HomePage() {
  return (
    <>
      <AlleyHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <AlleyFeatures />
      </div>
    </>
  );
}

export default HomePage;
