import React from 'react';

function NumberInput() {
  return (
    <>
      <button className="zep-button zep-button--number-input">
        <span className="zepicons zepicons-minus" />
      </button>
      <input
        type="text"
        className="zep-input zep-input--number"
        defaultValue="1"
      />
      <button className="zep-button zep-button--number-input">
        <span className="zepicons zepicons-plus" />
      </button>
    </>
  );
}

export default NumberInput;
