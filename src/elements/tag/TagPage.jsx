import React from 'react';
import Icon from '../icon/Icon';

function TagPage() {
  return (
    <>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <button
            className="zep-tag__button"
            onClick={() => console.log('test')}
          >
            <Icon icon="zepicons-close" className="zep-tag__icon" />
          </button>
        </span>
      </div>
      <div className="theme-yellow" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <button className="zep-tag__button">
            <Icon icon="zepicons-close" className="zep-tag__icon" />
          </button>
        </span>
      </div>
      <div className="theme-red" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <button className="zep-tag__button">
            <Icon icon="zepicons-close" className="zep-tag__icon" />
          </button>
        </span>
      </div>
    </>
  );
}

export default TagPage;
