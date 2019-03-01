import React, { useEffect } from 'react';
import data from './buttonData';
import * as bundleSrc from '../../bundle_source.js';

function ButtonComponent() {
  bundleSrc.getButtons();
  useEffect(() => {
    bundleSrc.getButtons();
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

export default ButtonComponent;
