import React, { useEffect } from 'react';
import data from './buttonData';
import ZEL from '../../zel';

function ButtonPage() {
  useEffect(() => {
    ZEL.getButtons();
  });

  return (
    <div className="zep-grid__row">
      {Object.keys(data).map((elem, idx) => (
        <span
          className="zep-grid__col zep-grid__col--12-12"
          dangerouslySetInnerHTML={{ __html: data[elem].js }}
          key={`button${idx}`}
        />
      ))}
    </div>
  );
}

export default ButtonPage;
