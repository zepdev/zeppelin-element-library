import React from 'react';

function Input() {
  return (
    <>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
        <input
          type="text"
          className="zep-input"
          defaultValue="Type Something"
        />
      </div>
      <div className="theme-cat" style={{ marginBottom: 15 }}>
        <input
          type="text"
          className="zep-input"
          defaultValue="Type Something"
        />
      </div>
      <div className="theme-rental" style={{ marginBottom: 15 }}>
        <input
          type="text"
          className="zep-input"
          defaultValue="Type Something"
        />
      </div>
    </>
  );
}

export default Input;
