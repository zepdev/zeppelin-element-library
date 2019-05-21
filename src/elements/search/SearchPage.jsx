import React from 'react';
import Icon from '../icon/Icon';

function SearchPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
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
            className="zep-search__input"
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
