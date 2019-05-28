import React from 'react';
import Icon from '../icon/Icon';

function TagPage() {
  return (
    <>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
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
      <div className="theme-cat" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <button className="zep-tag__button">
            <Icon icon="zepicons-close" className="zep-tag__icon" />
          </button>
        </span>
      </div>
      <div className="theme-rental" style={{ marginBottom: 15 }}>
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
