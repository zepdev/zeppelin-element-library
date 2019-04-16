import React from 'react';
import closeIcon from '../../assets/icons/zepicons-close.svg';

function Tag() {
  return (
    <>
      <span role="button" className="zep-tag">
        Tag
        <img src={closeIcon} alt="close" />
      </span>
    </>
  );
}

export default Tag;
