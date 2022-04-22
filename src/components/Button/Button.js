import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({ blackbtn = false, children }) => {
    return (
        <button className={cn(s.root, {
            [s.black]: blackbtn
        })}>
            {children}
        </button>
    )
}

Button.defaultProps = {
	blackbtn: false,
};

Button.propTypes = {
    blackbtn: PropTypes.bool,
    children: PropTypes.node
}

export default Button;