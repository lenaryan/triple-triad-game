import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './Button.module.scss';

const Button = ({ blackbtn = false, className, children, onClick }) => {
    const handleClick = () => {
        onClick();
    }
    
    return (
        <button className={cn(
            s.root, 
            className, {
                [s.black]: blackbtn
            })} 
            onClick={handleClick}>
            {children}
        </button>
    )
}

Button.defaultProps = {
	blackbtn: false,
};

Button.propTypes = {
    blackbtn: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}

export default Button;