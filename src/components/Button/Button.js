import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({ isBlack = false, isPink = false, isPinkAlt = false, className, children, onClick }) => {
	const handleClick = () => {
		onClick && onClick();
	};

	return (
		<button
			className={cn(s.root, className, {
				[s.black]: isBlack,
				[s.pink]: isPink,
				[s.pinkAlt]: isPinkAlt,
			})}
			onClick={handleClick}
		>
			{isPink ? <span>{children}</span> : children}
		</button>
	);
};

Button.defaultProps = {
	isBlack: false,
	isPink: false,
	isPinkAlt: false,
};

Button.propTypes = {
	isBlack: PropTypes.bool,
	isPink: PropTypes.bool,
	isPinkAlt: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Button;
