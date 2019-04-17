import React from 'react';

function CheckboxPage() {
  return (
    <>
      <div className="theme-zeppelin">
        <div className="zep-checkbox">
          <input
            className="zep-checkbox--input"
            type="checkbox"
            value=""
            id="checkboxId"
          />
          <label className="zep-checkbox-label" htmlFor="checkboxId">
            Zeppelin Checkbox
          </label>
        </div>
        <div className="zep-checkbox">
          <input
            className="zep-checkbox--input"
            type="checkbox"
            value=""
            id="checkboxId"
            disabled
          />
          <label className="zep-checkbox-label" htmlFor="checkboxId">
            Disabled Checkbox
          </label>
        </div>
      </div>
    </>
  );
}

export default CheckboxPage;
