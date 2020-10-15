import React from 'react';
import PropTypes from 'prop-types';
import svg from '../../assets/icons/sprite/sprite.svg';

const Icon = ({ className, width, height, icon, viewBox, ariaLabel }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      viewBox={viewBox}
      className={className}
      fill="currentColor"
    >
      <use xlinkHref={`${svg}#${icon}`} />
    </svg>
  );
};

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  width: '32',
  height: '32',
  viewBox: '0 0 24 24',
};

export default Icon;
