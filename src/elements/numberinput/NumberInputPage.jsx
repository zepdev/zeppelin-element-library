import React from 'react';
import Icon from '../icon/Icon';

function NumberInputPage() {
  const theme = ['indigo', 'yellow', 'red'];
  return (
    <>
      {theme.map((elem) => (
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
          <button className="zep-button zep-button--icon">
            <Icon
              icon="zep-icon-essential-subtract"
              className="zep-button__icon"
            />
          </button>
          <input
            type="text"
            className="zep-input zep-input--number"
            defaultValue="1"
          />
          <button className="zep-button zep-button--icon">
            <Icon icon="zep-icon-essential-add" className="zep-button__icon" />
          </button>
        </div>
      ))}
    </>
  );
}

export default NumberInputPage;
