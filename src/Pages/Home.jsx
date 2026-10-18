import Footer from '../components/Footer/Footer';
import AlleyHeader from '../components/AlleyConstruction/AlleyHeader/AlleyHeader';
import { Outlet } from 'react-router-dom';
import About from "../components/AlleyConstruction/AlleyAbout/AlleyAbout";
import AlleyFeatures from "../components/AlleyConstruction/AlleyFeatures/AlleyFeatures";

function Home() {
	return (
		<div className="bg-white min-h-screen flex flex-col">
			<AlleyHeader />

			<main className="flex-grow container mx-auto px-4 py-8">
				<Outlet />
				<About />
				<AlleyFeatures />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
