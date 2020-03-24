import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Radio = ({
  checked,
  onChange,
  value,
  name,
  label,
  id,
  className: classNameProp,
  ...other
}) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        className={clsx('zep-radio', classNameProp)}
        value={value}
        checked={checked}
        onChange={onChange}
        {...other}
      />
      <label htmlFor={id} className="zep-radio__label">
        {label || name}
      </label>
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Radio;
