import React from 'react';

function CheckboxPage() {
  return (
    <>
      <div className="theme-zeppelin">
        <div className="zep-checkbox">
          <input
            className="zep-checkbox__input"
            type="checkbox"
            value=""
            id="checkboxZep"
          />
          <label className="zep-checkbox__label" htmlFor="checkboxZep">
            Zeppelin Checkbox
          </label>
        </div>
      </div>
      <div className="theme-cat">
        <div className="zep-checkbox">
          <input
            className="zep-checkbox__input"
            type="checkbox"
            value=""
            id="checkboxCat"
          />
          <label className="zep-checkbox__label" htmlFor="checkboxCat">
            Cat Checkbox
          </label>
        </div>
      </div>
      <div className="theme-rental">
        <div className="zep-checkbox">
          <input
            className="zep-checkbox__input"
            type="checkbox"
            value=""
            id="checkboxRental"
          />
          <label className="zep-checkbox__label" htmlFor="checkboxRental">
            Rental Checkbox
          </label>
        </div>
      </div>
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
