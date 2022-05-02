import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Layout from './components/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Characters from './pages/Characters';
import { useEffect } from 'react';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="characters" element={<Characters />} />
				<Route path="characters/:id" element={<Biography />} />
				<Route path="contacts" element={<Contacts />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<Navigate to={'/'} />} />
			</Route>
		</Routes>
	);
}

export default App;
