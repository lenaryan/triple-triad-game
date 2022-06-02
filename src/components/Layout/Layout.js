import Header from '../Header';
import Footer from '../Footer';
import { Outlet, useMatch } from 'react-router-dom';

const Layout = () => {
	const matchLogin = useMatch('/login');
	return (
		<>
			{matchLogin === null ? (
				<>
					<Header />
					<Outlet />
					<Footer />
				</>
			) : (
				<>
					<Outlet />
					<Footer />
				</>
			)}
		</>
	);
};

export default Layout;
