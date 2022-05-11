import cn from 'classnames';
import logoLogin from '../../assets/logoLogin.png';
import { ReactComponent as Pen } from '../../assets/pen.svg';
import Container from '../../components/Container';
import Button from '../../components/Button';
import s from './Login.module.scss';

const Login = () => {
	// + сделать компонент Input
	// + сделать вложенность в стилях
	// + использовать рефы для онкликов
	// + вывести данные формы в консоль при логине
	// + вывести данные формы в консоль при регистрации
	// + проверить пароль и повтор пароля, чтобы были одинаковые

	// const toggleEl = document.querySelector('.toggle');
	// const closeEl = document.querySelector('.close');
	// const containerEl = document.querySelector('.container');

	// toggleEl.addEventListener('click', () => {
	// 	toggleEl.classList.add('active');
	// 	containerEl.classList.add('active');
	// });

	// closeEl.addEventListener('click', () => {
	// 	toggleEl.classList.remove('active');
	// 	containerEl.classList.remove('active');
	// });

	return (
		<>
			<section className={s.headerLogo}>
				<img src={logoLogin} alt="Logo" />
			</section>
			<section>
				<Container className={s.container}>
					<div className={s.card}></div>
					<div className={s.card}>
						<h1 className={s.title}>Login</h1>
						<form>
							<div className={s.inputContainer}>
								<input type="email" id="#email" required="required" />
								<label for="#email">Email</label>
								<div className={s.bar}></div>
							</div>
							<div className={s.inputContainer}>
								<input type="password" id="#password" required="required" />
								<label for="#password">Password</label>
								<div className={s.bar}></div>
							</div>
							<div className={s.buttonContainer}>
								<Button isPink>Go</Button>
							</div>
						</form>
					</div>
					<div className={cn(s.card, s.alt)}>
						<div className={s.toggle}>
							<Pen />
						</div>
						<h1 className={s.title}>
							Register
							<div className={s.close}></div>
						</h1>
						<form>
							<div className={s.inputContainer}>
								<input type="email" id="#signup-email" required="required" />
								<label for="#signup-email">Email</label>
								<div className={s.bar}></div>
							</div>
							<div className={s.inputContainer}>
								<input type="password" id="#signup-password" required="required" />
								<label for="#signup-password">Password</label>
								<div className={s.bar}></div>
							</div>
							<div className={s.inputContainer}>
								<input type="password" id="#signup-repeat-password" required="required" />
								<label for="#signup-repeat-password">Repeat Password</label>
								<div className={s.bar}></div>
							</div>
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
