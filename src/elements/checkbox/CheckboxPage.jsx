import React from 'react';

function CheckboxPage() {
  const themes = ['indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map(elem => (
        <div
          key={`theme-${elem}`}
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
        >
          <input
            className="zep-checkbox"
            type="checkbox"
            value=""
            id={`checkbox${elem}`}
          />
          <label className="zep-checkbox__label" htmlFor={`checkbox${elem}`}>
            {elem} checkbox
          </label>
        </div>
      ))}
      <div>
        <input
          className="zep-checkbox"
          type="checkbox"
          value=""
          id="checkboxDisabled"
          disabled
        />
        <label className="zep-checkbox__label" htmlFor="checkboxDisabled">
          Disabled Checkbox
        </label>
      </div>
    </>
  );
}

export default CheckboxPage;
