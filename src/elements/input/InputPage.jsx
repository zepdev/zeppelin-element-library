import React from 'react';

function InputPage() {
  const themes = ['indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map((elem) => (
        <div
          className={`theme-${elem} zep-input-container`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <input
            type="text"
            className="zep-input"
            placeholder={'Placeholder'}
            id={`input-${elem}`}
            name={`input-${elem}`}
          />
          <label
            className="zep-input-container__feedback"
            htmlFor={`input-${elem}`}
          >
            Your Feedback here
          </label>
          <label
            className="zep-input-container__label"
            htmlFor={`input-${elem}`}
          >
            Input {elem}
          </label>
        </div>
      ))}

      <div
        className={`theme-indigo zep-input-container zep-input-container--error`}
        style={{ marginBottom: 15 }}
      >
        <input
          type="text"
          className="zep-input"
          placeholder={'Placeholder'}
          id={`input-error-example`}
          name={`input-error-example`}
        />
        <label
          className="zep-input-container__feedback"
          htmlFor={`input-error-example`}
        >
          Your feedback here
        </label>
        <label
          className="zep-input-container__label"
          htmlFor={`input-error-example`}
        >
          Input Error Example
        </label>
      </div>
    </>
  );
}

export default InputPage;
