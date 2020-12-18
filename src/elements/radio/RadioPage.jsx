import React from 'react';

function RadioPage() {
  return (
    <>
      <div>
        <div style={{ marginBottom: 15 }}>
          <div className="zep-radio">
            <input
              className="zep-radio__input"
              type="radio"
              id="zep-radio-1"
              name="radio"
            />
            <label className="zep-radio__label" htmlFor="zep-radio-1">
              zep-radio block element
            </label>
          </div>
          <div className="zep-radio">
            <input
              className="zep-radio__input"
              type="radio"
              id="zep-radio-11"
              name="radio"
            />
            <label className="zep-radio__label" htmlFor="zep-radio-11">
              zep-radio block element
            </label>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 15 }}>
          <div className="zep-radio zep-radio--inline">
            <input
              className="zep-radio__input"
              type="radio"
              id="zep-radio-2"
              name="radio"
            />
            <label className="zep-radio__label" htmlFor="zep-radio-2">
              zep-radio inline element
            </label>
          </div>
          <div className="zep-radio zep-radio--inline">
            <input
              className="zep-radio__input"
              type="radio"
              id="zep-radio-3"
              name="radio"
            />
            <label className="zep-radio__label" htmlFor="zep-radio-3">
              zep-radio inline element 2
            </label>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 15 }}>
        <div className="zep-radio">
          <input
            className="zep-radio__input"
            type="radio"
            id="zep-radio-4"
            name="radio"
            disabled
          />
          <label className="zep-radio__label" htmlFor="zep-radio-4">
            zep-radio disabled
          </label>
        </div>
      </div>
    </>
  );
}

export default RadioPage;
