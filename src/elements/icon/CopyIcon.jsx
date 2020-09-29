import React from 'react';
import PropTypes from 'prop-types';

const CopyIcon = ({ className, width, height, fill, viewBox, ariaLabel }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-labelledby="title_copy"
    className={className}
  >
    <title id="title_copy">{ariaLabel || 'Copy'}</title>
    <path
      fill={fill}
      d="M20,21 L9,21 L9,7 L20,7 L20,21 Z M20,5 L9,5 C7.8954305,5 7,5.8954305 7,7 L7,21 C7,22.1045695 7.8954305,23 9,23 L20,23 C21.1045695,23 22,22.1045695 22,21 L22,7 C22,5.8954305 21.1045695,5 20,5 L20,5 Z M17,1 L5,1 C3.8954305,1 3,1.8954305 3,3 L3,17 L5,17 L5,3 L17,3 L17,1 Z"
    />
  </svg>
);

CopyIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  fill: PropTypes.string,
  ariaLabel: PropTypes.string,
};

CopyIcon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
  fill: 'currentColor',
};

export default CopyIcon;
