import React from 'react';
import Icon from '../icon/Icon';

function NumberInput() {
  const theme = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {theme.map(elem => (
        <div className={`theme-${elem}`} style={{ marginBottom: 15 }}>
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
