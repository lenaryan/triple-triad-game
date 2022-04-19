import React from 'react';
import s from './Text.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Text = ({ 
    element = 'div',
    className,
    strong = false,
    italic = false,
    disabled = false,
    children
}) => {
    return React.createElement(
        element, {
            className: cn(s.root, className, {
                [s.strong]: strong,
                [s.italic]: italic,
                [s.disabled]: disabled
            }),
        },
        children
    );
}

Text.defaultProps = {
    element: 'div',
    strong: false,
    italic: false,
    disabled: false,
}

Text.propTypes = {
    element: PropTypes.oneOf(['div', 'p', 'span']),
    className: PropTypes.string,
    strong: PropTypes.bool,
    italic: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node
}

export default Text;