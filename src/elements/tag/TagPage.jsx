import React from 'react';
import closeIcon from '../../assets/icons/zepicons-close.svg';

function Tag() {
  return (
    <div>
      <div role="button" className="zep-tag">
        <span>Tag</span>
        <img src={closeIcon} alt="close" />
      </div>
    </div>
  );
}

export default Tag;
