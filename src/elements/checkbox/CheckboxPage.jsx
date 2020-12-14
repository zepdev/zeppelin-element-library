import React from 'react';

function CheckboxPage() {
  return (
    <>
      <div style={{ marginBottom: 15 }}>
        <input
          className="zep-checkbox"
          type="checkbox"
          value=""
          id="checkbox"
        />
        <label className="zep-checkbox__label" htmlFor="checkbox">
          Checkbox
        </label>
      </div>
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
