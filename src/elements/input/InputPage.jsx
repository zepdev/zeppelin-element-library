import React from 'react';

function InputPage() {
  const themes = ['none', 'indigo', 'yellow', 'red'];
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
            className="zep-input-container__label"
            htmlFor={`input-${elem}`}
          >
            Input theme {elem}
          </label>
          <label
            className="zep-input-container__feedback"
            htmlFor={`input-${elem}`}
          >
            Your Feedback here
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
          className="zep-input-container__label"
          htmlFor={`input-error-example`}
        >
          Input Error Example (theme indigo)
        </label>
        <label
          className="zep-input-container__feedback"
          htmlFor={`input-error-example`}
        >
          Your feedback here
        </label>
      </div>

      <div
        className={`theme-indigo zep-input-container`}
        style={{ marginBottom: 15 }}
      >
        <input
          type="text"
          className="zep-input"
          placeholder={'Placeholder'}
          id={`input-disabled-example`}
          name={`input-disabled-example`}
          disabled
        />
        <label
          className="zep-input-container__label"
          htmlFor={`input-disabled-example`}
        >
          Input Disabled Example
        </label>
        <label
          className="zep-input-container__feedback"
          htmlFor={`input-disabled-example`}
        >
          Your feedback here
        </label>
      </div>
    </>
  );
}

export default InputPage;
