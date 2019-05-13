import React from 'react';
import Icon from '../icon/Icon';

function NumberInput() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {themes.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
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
