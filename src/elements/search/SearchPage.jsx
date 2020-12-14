import React from 'react';
import Icon from '../icon/Icon';

function SearchPage() {
  return (
    <>
      <p style={{ marginBottom: 15 }}>Header Search</p>
      <div className="zep-search" style={{ marginBottom: 30 }}>
        <input
          type="text"
          className="zep-search__input zep-search__input--searchfield"
          placeholder="Search"
          id="header-search"
        />
        <Icon icon="zepicons-search" className="zep-search__icon" />
        <label className="zep-visually-hidden" htmlFor="header-search">
          Search
        </label>
      </div>

      <div style={{ marginBottom: 30 }}>
        <p style={{ marginBottom: 15 }}>Search Default</p>
        <div className="zep-search" style={{ marginBottom: 15 }}>
          <input
            type="text"
            className="zep-search__input zep-search__input--rounded-left"
            placeholder="Search"
            id="search-default"
          />
          <Icon icon="zepicons-search" className="zep-search__icon" />
          <label className="zep-visually-hidden" htmlFor="search-default">
            Search
          </label>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
