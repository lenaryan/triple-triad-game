import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './Header.module.scss';
import logoPng from '../../assets/logo.png';
import Container from '../Container';
import { Link, useNavigate } from 'react-router-dom';
import { MENU } from '../../constants/menu';

const Header = () => {
	const navigate = useNavigate();
	const [isSmallHeader, setSmallHeader] = useState(false);

	useEffect(() => {
		document.addEventListener('scroll', () => {
			if (window.scrollY > 60) {
				setSmallHeader(true);
			} else {
				setSmallHeader(false);
			}
		});
	}, window.scrollY);

	const handleLogoClick = () => {
		navigate('/');
	};

	return (
		<header className={s.root}>
			<div
				className={cn(s.header, {
					[s.small]: isSmallHeader,
				})}
			>
				<Container className={s.flex}>
					<img className={s.logo} src={logoPng} alt="Logo" onClick={handleLogoClick} />
					<ul className={s.nav}>
						{MENU.map((item, index) => (
							<li>
								<Link to={item.path} key={index}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</Container>
			</div>
		</header>
	);
};

export default Header;
