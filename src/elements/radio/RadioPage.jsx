import React, { useState } from 'react';
import Radio from './Radio';
import RadioGroup from './RadioGroup';

function RadioPage() {
  const themes = ['indigo', 'yellow', 'red'];
  const [radio, setRadio] = useState('a');
  function handleChange(event) {
    setRadio(event.target.value);
    console.log(event.target.value);
  }
  console.log(radio);
  return (
    <>
      {themes.map(elem => (
        <div
          className={`theme-${elem}`}
          key={elem}
          style={{ marginBottom: 15 }}
        >
          <input
            type="radio"
            id={`id${elem}`}
            name="radio"
            className="zep-radio"
          />
          <label htmlFor={`id${elem}`} className="zep-radio__label">
            Radio {elem}
          </label>
        </div>
      ))}
      <div className="theme-indigo">
        <RadioGroup title="Select One">
          <Radio
            value="a"
            id="radioA"
            name="value 1"
            checked={radio === 'a'}
            onChange={handleChange}
          />
          <Radio
            value="b"
            name="value 2"
            id="radioB"
            checked={radio === 'b'}
            onChange={handleChange}
          />
          <Radio
            value="c"
            name="value 3"
            id="radioC"
            checked={radio === 'c'}
            onChange={handleChange}
          />
        </RadioGroup>
      </div>
    </>
  );
}

export default RadioPage;
