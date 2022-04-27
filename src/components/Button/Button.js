import PropTypes from "prop-types";
import cn from "classnames";
import s from "./Button.module.scss";

const Button = ({ isBlack = false, className, children, onClick }) => {
	const handleClick = () => {
		onClick();
	};

	return (
		<button
			className={cn(s.root, className, {
				[s.black]: isBlack,
			})}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

Button.defaultProps = {
	isBlack: false,
};

Button.propTypes = {
	isBlack: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Button;
