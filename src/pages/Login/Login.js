import cn from 'classnames';
import logoLogin from '../../assets/logoLogin.png';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import Container from '../../components/Container';
import Button from '../../components/Button';
import s from './Login.module.scss';
import Input from '../../components/Input/Input';
import { useState } from 'react';

const Login = () => {
	// + вывести данные формы в консоль при логине
	// + вывести данные формы в консоль при регистрации
	// + проверить пароль и повтор пароля, чтобы были одинаковые

	const [toggleActive, setToggleActive] = useState(false);
	const [containerActive, setContainerActive] = useState(false);

	const handleToggleClick = () => {
		setToggleActive(true);
		setContainerActive(true);
	};

	const handleCloseClick = () => {
		setToggleActive(false);
		setContainerActive(false);
	};

	return (
		<>
			<section className={s.headerLogo}>
				<img src={logoLogin} alt="Logo" />
			</section>
			<section>
				<Container
					className={cn(s.container, {
						[s.active]: containerActive,
					})}
				>
					<div className={s.card}></div>
					<div className={s.card}>
						<h1 className={s.title}>Login</h1>
						<form>
							<Input className={s.input} id="email" type="email" required label="Email" />
							<Input className={s.input} id="password" type="password" required label="Password" />
							<div className={s.buttonContainer}>
								<Button isPink>Go</Button>
							</div>
						</form>
					</div>
					<div className={cn(s.card, s.alt)}>
						<div
							className={cn(s.toggle, {
								[s.active]: toggleActive,
							})}
							onClick={handleToggleClick}
						>
							<Pen />
						</div>
						<h1 className={s.title}>
							Register
							<div className={s.close} onClick={handleCloseClick}></div>
						</h1>
						<form>
							<Input className={s.input} altInput id="signup-email" type="email" required label="Email" />
							<Input className={s.input} altInput id="signup-password" type="password" required label="Password" />
							<Input
								className={s.input}
								altInput
								id="signup-repeat-password"
								type="password"
								required
								label="Repeat Password"
							/>
							<div className={s.buttonContainer}>
								<Button isPink isPinkAlt>
									Register
								</Button>
							</div>
						</form>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Login;
