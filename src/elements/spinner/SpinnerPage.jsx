import React from 'react';

function SpinnerPage() {
  return (
    <>
      <p className="zep-typo--normal-body1" style={{ marginBottom: 5 }}>
        Spinner default (1.5rem = 24px)
      </p>
      <div className="zep-spinner" style={{ marginBottom: 15 }}>
        <svg viewBox="0 0 24 24">
          <circle className="stroke" cx="12" cy="12" r="9.38" />
        </svg>
      </div>

      <p className="zep-typo--normal-body1" style={{ marginBottom: 5 }}>
        Spinner medium (3rem = 48px)
      </p>
      <div
        className="zep-spinner zep-spinner--medium"
        style={{ marginBottom: 15 }}
      >
        <svg viewBox="0 0 24 24">
          <circle className="stroke" cx="12" cy="12" r="9.38" />
        </svg>
      </div>

      <p className="zep-typo--normal-body1" style={{ marginBottom: 5 }}>
        Spinner large (4.5rem = 72px)
      </p>
      <div
        className="zep-spinner zep-spinner--large"
        style={{ marginBottom: 15 }}
      >
        <svg viewBox="0 0 24 24">
          <circle className="stroke" cx="12" cy="12" r="9.38" />
        </svg>
      </div>

      <p className="zep-typo--normal-body1" style={{ marginBottom: 5 }}>
        Spinner default inverted (1.5rem = 20px)
      </p>
      <div
        style={{
          backgroundColor: '#000',
          padding: '1rem',
          display: 'inline-block',
          marginBottom: 15,
        }}
      >
        <div className="zep-spinner zep-spinner--invert">
          <svg viewBox="0 0 24 24">
            <circle className="stroke" cx="12" cy="12" r="9.38" />
          </svg>
        </div>
      </div>
      <p className="zep-typo--normal-body1" style={{ marginBottom: 5 }}>
        Spinner medium inverted (3rem = 48px)
      </p>
      <div
        style={{
          backgroundColor: '#000',
          padding: '1rem',
          display: 'inline-block',
          marginBottom: 15,
        }}
      >
        <div className="zep-spinner zep-spinner--invert zep-spinner--medium">
          <svg viewBox="0 0 24 24">
            <circle className="stroke" cx="12" cy="12" r="9.38" />
          </svg>
        </div>
      </div>
      <p className="zep-typo--normal-body1" style={{ marginBottom: 5 }}>
        Spinner large inverted (4.5rem = 72px)
      </p>
      <div
        style={{
          backgroundColor: '#000',
          padding: '1rem',
          display: 'inline-block',
          marginBottom: 15,
        }}
      >
        <div className="zep-spinner zep-spinner--invert zep-spinner--large">
          <svg viewBox="0 0 24 24">
            <circle className="stroke" cx="12" cy="12" r="9.38" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default SpinnerPage;
