import PropTypes from 'prop-types';
import s from './Input.module.scss';
import cn from 'classnames';

const Input = ({ type = 'text', altInput, id, className, name, label, required }) => {
	return (
		<div
			className={cn(s.root, className, {
				[s.alt]: altInput,
			})}
		>
			<input type={type} id={id} name={name} required={required} />
			<label htmlFor={id}>{label}</label>
			<div className={s.bar}></div>
		</div>
	);
};

Input.defaultProps = {
	type: 'text',
};

Input.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	required: PropTypes.bool,
	altInput: PropTypes.bool,
	name: PropTypes.string,
};

export default Input;
