
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import InverterHome from './components/InverterHome/InverterHome';
import AlleyPortfolio from './components/AlleyConstruction/AlleyPortfolio/AlleyPortfolio';
import AlleyHero from './components/AlleyConstruction/AlleyHero/AlleyHero';

import './index.css';
import 'animate.css';

function App() {
	return (
		< Routes >
			{/* Главная страница: / (а из-за base это будет /alley-build/) */}
			< Route path="/" element={< Home />}>
				< Route index element={< AlleyHero />} />
			</Route >

			<Route path="/portfolio" element={<AlleyPortfolio />} />
			<Route path="/inverters" element={<InverterHome />} />
		</Routes >
	);
}

export default App;