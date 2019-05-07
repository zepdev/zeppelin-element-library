import React from 'react';

function Tag() {
  return (
    <>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <i className="zepicons zepicons-close" />
        </span>
      </div>
      <div className="theme-cat" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <i className="zepicons zepicons-close" />
        </span>
      </div>
      <div className="theme-rental" style={{ marginBottom: 15 }}>
        <span role="button" className="zep-tag">
          Tag
          <i className="zepicons zepicons-close" />
        </span>
      </div>
    </>
  );
}

export default Tag;
