import React from 'react';
import data from './buttonData';
import './Button.scss';

function Button() {
  return (
    <>
      {Object.keys(data).map((elem, idx) => (
        <div
          dangerouslySetInnerHTML={{ __html: data[elem].js }}
          key={`button${idx}`}
        />
      ))}
    </>
  );
}

export default Button;
