import React from 'react';

function Input() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {themes.map(elem => {
        return (
          <div
            className={`theme-${elem} zep-form-container`}
            style={{ marginBottom: 15 }}
            key={elem}
          >
            <input
              type="text"
              className="zep-input"
              placeholder={'Placeholder'}
              id={`input-${elem}`}
            />
            <label
              className="zep-form-container__label"
              htmlFor={`input-${elem}`}
            >
              Input {elem}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default Input;
