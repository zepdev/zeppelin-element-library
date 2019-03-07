import React, { useEffect } from 'react';
import data from './buttonData';
import ZEL from '../../zel.js';

function ButtonPage() {
  useEffect(() => {
    ZEL.getButtons();
  });

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

export default ButtonPage;
