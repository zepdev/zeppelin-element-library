import React from 'react';
import minusIcon from '../../assets/icons/zepicons-minus.svg';
import plusIcon from '../../assets/icons/zepicons-plus.svg';

function NumberInput() {
  return (
    <>
      <button className="zep-button zep-button__number-input">
        {/* <span className="zep-button__text"> */}
        <img src={minusIcon} alt="minus" />
        {/* </span> */}
      </button>
      <input type="text" className="zep-input__number" value="1" />
      <button className="zep-button zep-button__number-input">
        <img src={plusIcon} alt="plus" />
      </button>
    </>
  );
}

export default NumberInput;
