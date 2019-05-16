/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React from 'react';
import Icon from '../icon/Icon';

// take javascript example from https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/listbox/listbox-collapsible.htmla

function SelectPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      <p style={{ marginBottom: 45 }}>With List</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <div className="zep-select">
            <label id="exp_elem" className="zep-select__label">
              Label
            </label>
            <div id="exp_wrapper">
              <button
                aria-haspopup="listbox"
                aria-labelledby="exp_elem exp_button"
                id="exp_button"
                className="zep-select__button"
              >
                Select One
                <Icon
                  className="zep-select__icon"
                  icon="zepicons-navigation-dropdown"
                />
              </button>
              <ul
                id="exp_elem_list"
                tabIndex="-1"
                role="listbox"
                aria-labelledby="exp_elem"
                className="zep-select__list"
                //className="zep-visually-hidden"
              >
                <li
                  id="exp_elem_A"
                  role="option"
                  tabIndex="0"
                  className="zep-select__listitem"
                >
                  option A
                </li>
                <li
                  id="exp_elem_B"
                  role="option"
                  tabIndex="-1"
                  className="zep-select__listitem"
                >
                  option B
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SelectPage;
