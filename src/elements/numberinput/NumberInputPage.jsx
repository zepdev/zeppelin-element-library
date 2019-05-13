import React from 'react';
import Icon from '../icon/Icon';

function NumberInput() {
  const theme = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {theme.map(elem => (
        <div
          key={`key-${elem}`}
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          data-zep-type="number-input"
          data-zep-init="false"
          data-zep-min="0"
          data-zep-max="10"
          data-zep-step="2"
        >
          <button className="zep-button zep-button-icon">
            <Icon icon="zepicons-minus" className="zep-button__icon" />
          </button>
          <input
            type="text"
            className="zep-input zep-input--number"
            defaultValue="1"
          />
          <button className="zep-button zep-button-icon">
            <Icon icon="zepicons-plus" className="zep-button__icon" />
          </button>
        </div>
      ))}
    </>
  );
}

export default NumberInput;
