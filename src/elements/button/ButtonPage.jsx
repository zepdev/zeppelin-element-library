import React, { useEffect } from 'react';
import data from './buttonData';
import ZEL from '../../zel';

function ButtonPage() {
  useEffect(() => {
    ZEL.getButtons();
  });

  return (
    <div>
      {Object.keys(data).map((elem, idx) => (
        <span
          dangerouslySetInnerHTML={{ __html: data[elem].js }}
          key={`button${idx}`}
        />
      ))}
    </div>
  );
}

export default ButtonPage;
