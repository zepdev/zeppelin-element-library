import React from 'react';
import Icon from '../icon/Icon';

function PaginationPage() {
  const themes = ['none', 'indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map((theme, i) => (
        <div key={`pagination${theme}`} style={{ marginBottom: 15 }}>
          <p style={{ marginBottom: 5 }} className="zep-typo--body-default">
            Theme {theme} (selected item: {i + 1})
          </p>
          <div className={`theme-${theme} zep-pagination`}>
            <button
              className="zep-button zep-button--primary zep-button--icon"
              disabled={i === 0}
            >
              <Icon icon="zep-icon-arrow-left" className="zep-button__icon" />
            </button>
            <button
              className="zep-button zep-button--primary zep-button--icon"
              disabled={i === 0}
            >
              <Icon
                icon="zep-icon-arrow-chevron-left"
                className="zep-button__icon"
              />
            </button>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                className={`zep-button zep-button--pagination ${
                  num === i + 1 ? 'zep-button--selected' : ''
                }`}
                key={`count${num}`}
              >
                {num}
              </button>
            ))}
            <button className="zep-button zep-button--primary zep-button--icon">
              <Icon
                icon="zep-icon-arrow-chevron-right"
                className="zep-button__icon"
              />
            </button>
            <button className="zep-button zep-button--primary zep-button--icon">
              <Icon icon="zep-icon-arrow-right" className="zep-button__icon" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default PaginationPage;
