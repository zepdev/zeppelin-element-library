import React from 'react';
import Icon from '../icon/Icon';

function SearchPage() {
  const themes = ['indigo', 'yellow', 'red', 'blue'];
  return (
    <>
      <div style={{ padding: 30, background: '#fff', marginBottom: 15 }}>
        <p style={{ color: '#FFF' }}>Search Default</p>
        {themes.map((elem) => (
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
      </div>

      <p>Header Default</p>
      {themes.map((elem) => (
        <div
          className={`theme-${elem} zep-search`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <input
            type="text"
            className="zep-search__input zep-search__input--searchfield"
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
