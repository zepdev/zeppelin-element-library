import React from 'react';

function RadioPage() {
  return (
    <>
      <span className="theme-zeppelin">
        <label className="zep-radio" style={{ marginBottom: 15 }}>
          <input type="radio" name="radio" className="zep-radio__input" />
          <span className="zep-radio__indicator" />
          <span className="zep-radio__label">Radio Zeppelin</span>
        </label>
      </span>
      <span className="theme-cat">
        <label className="zep-radio" style={{ marginBottom: 15 }}>
          Radio Cat
          <input type="radio" name="radio" className="zep-radio__input" />
          <span className="zep-radio__indicator" />
        </label>
      </span>
      <span className="theme-rental">
        <label className="zep-radio" style={{ marginBottom: 15 }}>
          Radio Rental
          <input type="radio" name="radio" className="zep-radio__input" />
          <span className="zep-radio__indicator" />
        </label>
      </span>
    </>
  );
}

export default RadioPage;
