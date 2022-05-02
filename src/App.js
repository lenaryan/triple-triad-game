import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Biography from './pages/Biography';
import Layout from './components/Layout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import CharactersWrap from './components/CharactersWrap';
import Characters from './pages/Characters';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="characters" element={<CharactersWrap />}>
					<Route index element={<Characters />} />
					<Route path=":id" element={<Biography />} />
				</Route>
				<Route path="contacts" element={<Contacts />} />
				<Route path="about" element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
