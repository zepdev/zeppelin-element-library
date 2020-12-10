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
            <button className="zep-button zep-button--icon" disabled>
              <Icon
                icon="zepicons-previous-page"
                className="zep-button__icon"
              />
            </button>
            <button className="zep-button zep-button--icon" disabled>
              <Icon icon="zepicons-chevron-left" className="zep-button__icon" />
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
            <button className="zep-button zep-button--icon">
              <Icon
                icon="zepicons-chevron-right"
                className="zep-button__icon"
              />
            </button>
            <button className="zep-button zep-button--icon">
              <Icon icon="zepicons-next-page" className="zep-button__icon" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default PaginationPage;
