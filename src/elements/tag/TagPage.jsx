import React from 'react';
import closeIcon from '../../assets/icons/iconsMiscActionClose.svg';

function Tag() {
  return (
    <div>
      <span role="button" className="zep-tag">
        Tag
        <img src={closeIcon} alt="close" />
      </span>
    </div>
  );
}

export default Tag;
