import React from 'react';

function NumberInput() {
  return (
    <>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
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
      </div>
      <div className="theme-cat" style={{ marginBottom: 15 }}>
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
      </div>
      <div className="theme-rental" style={{ marginBottom: 15 }}>
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
      </div>
    </>
  );
}

export default NumberInput;
