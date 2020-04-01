import React from 'react';
import Icon from '../icon/Icon';

function SearchPage() {
  const themes = ['indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map(elem => (
        <div
          className={`theme-${elem} zep-search`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <input
            type="text"
            className="zep-search__input zep-search__input--rounded-left"
            placeholder="Search"
            id={`search-${elem}`}
          />
          <Icon icon="zepicons-search" className="zep-search__icon" />
          <label className="zep-visually-hidden" htmlFor={`search-${elem}`}>
            Search {elem}
          </label>
        </div>
      ))}
    </>
  );
}

export default SearchPage;
