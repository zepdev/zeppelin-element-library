import React from 'react';

function RadioPage() {
  const themes = ['indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map(elem => (
        <div
          className={`theme-${elem}`}
          key={elem}
          style={{ marginBottom: 15 }}
        >
          <input
            type="radio"
            id={`id${elem}`}
            name="radio"
            className="zep-radio"
          />
          <label htmlFor={`id${elem}`} className="zep-radio__label">
            Radio {elem}
          </label>
        </div>
      ))}
    </>
  );
}

export default RadioPage;
