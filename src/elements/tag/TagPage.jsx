import React from 'react';
import Icon from '../icon/Icon';

function TagPage() {
  return (
    <>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <Icon icon="zepicons-close" />
        </span>
      </div>
      <div className="theme-cat" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <Icon icon="zepicons-close" />
        </span>
      </div>
      <div className="theme-rental" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <Icon icon="zepicons-close" />
        </span>
      </div>
    </>
  );
}

export default TagPage;
