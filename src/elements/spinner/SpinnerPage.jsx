import React from 'react';

function SpinnerPage() {
  return (
    <>
      <p className="zep-typo--normal-body1">Spinner default (1.25rem = 20px)</p>
      <div className="zep-spinner">
        <svg viewBox="0 0 20 20">
          <circle className="stroke" cx="10" cy="10" r="8" />
        </svg>
      </div>

      <p className="zep-typo--normal-body1">Spinner medium (2.5rem = 40px)</p>
      <div className="zep-spinner zep-spinner--medium">
        <svg viewBox="0 0 20 20">
          <circle className="stroke" cx="10" cy="10" r="8" />
        </svg>
      </div>

      <p className="zep-typo--normal-body1">Spinner large (3.75rem = 60px)</p>
      <div className="zep-spinner zep-spinner--large">
        <svg viewBox="0 0 20 20">
          <circle className="stroke" cx="10" cy="10" r="8" />
        </svg>
      </div>

      <p className="zep-typo--normal-body1">
        Spinner default inverted (1.25rem = 20px)
      </p>
      <div
        style={{
          backgroundColor: '#000',
          padding: '1rem',
          display: 'inline-block',
        }}
      >
        <div className="zep-spinner zep-spinner--invert">
          <svg viewBox="0 0 20 20">
            <circle className="stroke" cx="10" cy="10" r="8" />
          </svg>
        </div>
      </div>
      <p className="zep-typo--normal-body1">
        Spinner medium inverted (2.5rem = 40px)
      </p>
      <div
        style={{
          backgroundColor: '#000',
          padding: '1rem',
          display: 'inline-block',
        }}
      >
        <div className="zep-spinner zep-spinner--invert zep-spinner--medium">
          <svg viewBox="0 0 20 20">
            <circle className="stroke" cx="10" cy="10" r="8" />
          </svg>
        </div>
      </div>
      <p className="zep-typo--normal-body1">
        Spinner large inverted(3.75rem = 60px)
      </p>
      <div
        style={{
          backgroundColor: '#000',
          padding: '1rem',
          display: 'inline-block',
        }}
      >
        <div className="zep-spinner zep-spinner--invert zep-spinner--large">
          <svg viewBox="0 0 20 20">
            <circle className="stroke" cx="10" cy="10" r="8" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default SpinnerPage;
