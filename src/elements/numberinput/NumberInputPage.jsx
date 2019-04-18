import React from 'react';
import minusIcon from '../../assets/icons/zepicons-minus.svg';
import plusIcon from '../../assets/icons/zepicons-plus.svg';

function NumberInput() {
  return (
    <>
      <button className="zep-button zep-button__number-input">
        <img src={minusIcon} alt="minus" />
      </button>
      <input type="text" className="zep-input__number" defaultValue="1" />
      <button className="zep-button zep-button__number-input">
        <img src={plusIcon} alt="plus" />
      </button>
    </>
  );
}

export default NumberInput;
