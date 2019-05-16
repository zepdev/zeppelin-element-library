import React from 'react';
import Icon from '../icon/Icon';

function SelectPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      <p>With select</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem} zep-form-container`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <select className="zep-select">
            <option value="a">option A</option>
            <option value="b">option B</option>
            <option value="c">option C</option>
          </select>
        </div>
      ))}
      <p>With List</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem} zep-form-container listbox-area`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <div class="left-area">
            <span id="exp_elem">Choose an element:</span>
            <div id="exp_wrapper">
              <button
                aria-haspopup="listbox"
                aria-labelledby="exp_elem exp_button"
                id="exp_button"
              >
                Neptunium
              </button>
              <ul
                id="exp_elem_list"
                tabindex="-1"
                role="listbox"
                aria-labelledby="exp_elem"
                class="hidden"
              >
                <li id="exp_elem_Np" role="option">
                  Neptunium
                </li>
                <li id="exp_elem_Pu" role="option">
                  Plutonium
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
