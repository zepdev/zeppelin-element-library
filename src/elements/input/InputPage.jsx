import React from 'react';

function Input() {
  var themes = [
    { key: 'zeppelin', name: 'Zeppelin' },
    { key: 'cat', name: 'CAT' },
    { key: 'rental', name: 'Rental' }
  ];
  return (
    <>
      {themes.map((theme, key) => {
        return (
          <div
            className={'theme-' + theme.key + ' zep-form-container'}
            style={{ marginBottom: 15 }}
            key={key}
          >
            <label
              className="zep-form-container__label"
              htmlFor={'input-' + theme.key}
            >
              Input {theme.name}
            </label>
            <input
              type="text"
              className="zep-input"
              placeholder={'Input ' + theme.name}
              id={'input-' + theme.key}
            />
          </div>
        );
      })}
    </>
  );
}

export default Input;
