import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({
  bgColor,
  handleOnClick,
  textColor,
  children,
  width,
  height,
  className,
  margin,
  padding,
  fontWeight,
}) => (
  <button
    style={{
      backgroundColor: bgColor,
      color: textColor,
      width,
      height,
      margin,
      padding,
      fontWeight,
    }}
    onClick={handleOnClick}
    type="button"
    className={`${className} button`}
  >
    {children}
  </button>
);

Button.propTypes = {
  bgColor: PropTypes.string,
  handleOnClick: PropTypes.func,
  textColor: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fontWeight: PropTypes.string,
};

Button.defaultProps = {
  bgColor: '#0290ff',
  handleOnClick: () => {},
  textColor: '#ffffff',
  children: 'Click Me',
  width: '11.5rem',
  height: '2.063rem',
  className: null,
  margin: '1.438rem 0 0',
  padding: '0.438rem 1.188rem 0.5rem 1.375rem',
  fontWeight: '300',
};

export default Button;
