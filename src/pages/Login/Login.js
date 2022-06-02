import cn from 'classnames';
import logoLogin from '../../assets/logoLogin.png';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import Container from '../../components/Container';
import Button from '../../components/Button';
import s from './Login.module.scss';
import Input from '../../components/Input/Input';
import { useState } from 'react';

const Login = () => {
	const [loginForm, setLoginForm] = useState({
		email: '',
		password: '',
	});

	const [registerForm, setRegisterForm] = useState({
		regemail: '',
		regpassword: '',
		regrepeat: '',
	});

	const [toggleActive, setToggleActive] = useState(false);
	const [containerActive, setContainerActive] = useState(false);

	const handleLoginChange = (e) => {
		setLoginForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
	};

	const handleRegisterChange = (e) => {
		setRegisterForm((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		if (registerForm.regpassword !== registerForm.regrepeat) {
			console.log("passwords don't match, you lil shit!");
		} else {
			console.log('register form', registerForm);
		}
	};

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
						<form onChange={handleLoginChange} onSubmit={handleLoginSubmit}>
							<Input
								className={s.input}
								id="email"
								type="email"
								name="email"
								required
								label="Email"
								value={loginForm.email}
							/>
							<Input
								className={s.input}
								id="password"
								type="password"
								name="password"
								required
								label="Password"
								value={loginForm.password}
							/>
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
						<form onChange={handleRegisterChange} onSubmit={handleRegisterSubmit}>
							<Input
								className={s.input}
								altInput
								id="signup-email"
								type="email"
								name="regemail"
								required
								label="Email"
								value={registerForm.email}
							/>
							<Input
								className={s.input}
								altInput
								id="signup-password"
								type="password"
								name="regpassword"
								required
								label="Password"
								value={registerForm.password}
							/>
							<Input
								className={s.input}
								altInput
								id="signup-repeat-password"
								type="password"
								name="regrepeat"
								required
								label="Repeat Password"
								value={registerForm.repeat}
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
