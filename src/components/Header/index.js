import React from 'react';
import s from './Header.module.scss';
import logoPng from '../../assets/logo.png';
import Container from '../Container';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container className={s.flex}>
                    <img className={s.logo} src={logoPng} alt="Logo" />
                    <ul className={s.nav}>
                        {
                            MENU.map(item => <li><a href="#">{item}</a></li>)
                        }
                    </ul>
                </Container>
            </div>
        </header>
    )
}

export default Header;