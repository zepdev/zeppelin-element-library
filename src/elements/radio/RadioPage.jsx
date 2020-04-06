import React from 'react';

function RadioPage() {
  const themes = ['indigo', 'yellow', 'red'];

  return (
    <>
      <div>
        {themes.map(elem => (
          <div
            className={`theme-${elem}`}
            key={elem}
            style={{ marginBottom: 15 }}
          >
            <div className="zep-radio">
              <input type="radio" id={`id${elem}`} name="radio" />
              <label htmlFor={`id${elem}`}>Radio {elem}</label>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 15, marginBottom: 15 }}>Inline</p>
      <div>
        {themes.map(elem => (
          <div
            className={`theme-${elem}`}
            key={elem}
            style={{ marginBottom: 15 }}
          >
            <div className="zep-radio zep-radio-inline">
              <input type="radio" id={`inline${elem}`} name="radio" />
              <label htmlFor={`inline${elem}`}>Radio {elem}</label>
            </div>
            <div className="zep-radio zep-radio-inline">
              <input type="radio" id={`inline2${elem}`} name="radio" />
              <label htmlFor={`inline2${elem}`}>Radio2 {elem}</label>
            </div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 15, marginBottom: 15 }}>Disabled</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem}`}
          key={elem}
          style={{ marginBottom: 15 }}
        >
          <div className="zep-radio">
            <input type="radio" id={`id3${elem}`} name="radio" disabled />
            <label htmlFor={`id3${elem}`}>Radio {elem}</label>
          </div>
        </div>
      ))}
    </>
  );
}

export default RadioPage;
