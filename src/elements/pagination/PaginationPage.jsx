import React from 'react';
import Icon from '../icon/Icon';

function PaginationPage() {
  const themes = ['indigo', 'yellow', 'red'];
  return (
    <>
      {themes.map((elem) => (
        <div
          className={`theme-${elem} zep-pagination`}
          style={{ marginBottom: 15 }}
          key={`pagination${elem}`}
        >
          <button className="zep-button zep-button-icon" disabled>
            <Icon icon="zepicons-previous-page" className="zep-button__icon" />
          </button>
          <button className="zep-button zep-button-icon" disabled>
            <Icon icon="zepicons-chevron-left" className="zep-button__icon" />
          </button>
          {[1, 2, 3, 4, 5].map((elem) => (
            <button
              className="zep-button zep-button-pagination"
              key={`count${elem}`}
            >
              {elem}
            </button>
          ))}
          <button className="zep-button zep-button-icon">
            <Icon icon="zepicons-chevron-right" className="zep-button__icon" />
          </button>
          <button className="zep-button zep-button-icon">
            <Icon icon="zepicons-next-page" className="zep-button__icon" />
          </button>
        </div>
      ))}
    </>
  );
}

export default PaginationPage;
