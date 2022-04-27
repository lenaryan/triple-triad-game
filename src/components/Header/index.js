import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './Header.module.scss';
import logoPng from '../../assets/logo.png';
import Container from '../Container';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    const [isSmallHeader, setSmallHeader] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                setSmallHeader(true);
            } else {
                setSmallHeader(false);
            }
        })
    }, window.scrollY);

    return (
        <header className={s.root}>
            <div className={cn(s.header, {
                [s.small]: isSmallHeader
            })}>
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