import React from 'react';
import Icon from '../icon/Icon';

function TagPage() {
  const themes = ['none', 'indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map((theme) => (
        <div key={theme}>
          <p className="zep-typo--body-default" style={{ marginBottom: 5 }}>
            Theme {theme}
          </p>
          <div className={`theme-${theme}`} style={{ marginBottom: 15 }}>
            <span role="button" className="zep-tag">
              Tag
              <button className="zep-tag__button">
                <Icon
                  icon="zep-icon-essential-close"
                  className="zep-tag__icon"
                />
              </button>
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default TagPage;
