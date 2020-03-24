import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const RadioGroup = ({
  title,
  children,
  className: classNameProp,
  classNameLegend,
  ...other
}) => {
  return (
    <fieldset
      role="group"
      aria-labelledby={`radio_${title}`}
      className={clsx('zep-typo--normal-body1', classNameProp)}
      {...other}
    >
      <legend id={`radio_${title}`} className={classNameLegend}>
        {title}
      </legend>
      {children}
    </fieldset>
  );
};

RadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  classNameLegend: PropTypes.string
};

export default RadioGroup;
