import React from 'react';

function RadioPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      {themes.map(elem => (
        <div lassName={`theme-${elem}`} key={elem} style={{ marginBottom: 15 }}>
          <label className="zep-radio">
            <input type="radio" name="radio" className="zep-radio__input" />
            <span className="zep-radio__indicator" />
            <span className="zep-radio__label">Radio {elem}</span>
          </label>
        </div>
      ))}
    </>
  );
}

export default RadioPage;
