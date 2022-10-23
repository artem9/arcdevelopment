import React from 'react';
import PropTypes from 'prop-types';

function ButtonArrow({ className, width, height, fill }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 18 18'
    >
      <path d='M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z' />
    </svg>
  );
}

ButtonArrow.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired
}

ButtonArrow.defaultProps = {
  className: undefined
}

export default ButtonArrow;
