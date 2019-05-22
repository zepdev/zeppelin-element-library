import React from 'react';
import Icon from '../icon/Icon';

function NumberInputPage() {
  const theme = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {theme.map(elem => (
        <div
          key={`key-${elem}`}
          className={`theme-${elem} zep-numberinput`}
          style={{ marginBottom: 15 }}
          data-zep-type="number-input"
          data-zep-init="true"
          data-zep-min="0"
          data-zep-max="10"
          data-zep-step="2"
        >
          <button
            className="zep-button zep-button-icon"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <Icon icon="zepicons-minus" className="zep-button__icon" />
          </button>
          <input
            type="text"
            className="zep-input zep-input--number"
            defaultValue="1"
            style={{ verticalAlign: 'middle' }}
          />
          <button
            className="zep-button zep-button-icon"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <Icon icon="zepicons-plus" className="zep-button__icon" />
          </button>
        </div>
      ))}
    </>
  );
}
export default NumberInputPage;
