import React from 'react';

function CheckboxPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {themes.map(elem => (
        <div key={`theme-${elem}`} className={`theme-${elem}`}>
          <div className="zep-checkbox">
            <input
              className="zep-checkbox__input"
              type="checkbox"
              value=""
              id={`checkbox${elem}`}
            />
            <label className="zep-checkbox__label" htmlFor={`checkbox${elem}`}>
              {elem} checkbox
            </label>
          </div>
        </div>
      ))}
      <div className="zep-checkbox">
        <input
          className="zep-checkbox__input"
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
