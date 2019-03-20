import React, { useEffect } from 'react';
import data from './buttonData';
import ZEL from '../../zel';

function ButtonPage() {
  useEffect(() => {
    ZEL.getButtons();
  });

  return (
    <>
      {Object.keys(data).map((elem, idx) => (
        <span
          dangerouslySetInnerHTML={{ __html: data[elem].js }}
          key={`button${idx}`}
        />
      ))}
    </>
  );
}

export default ButtonPage;
