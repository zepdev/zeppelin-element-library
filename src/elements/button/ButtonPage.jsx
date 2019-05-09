import React from 'react';
import CopyIcon from '../icon/CopyIcon';
import Icon from '../icon/Icon';

function ButtonPage() {
  const theme = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      <p>Primary - Large</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-primary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
      ))}
      <p>Other</p>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
        <button className="zep-button zep-button-primary zep-button--small">
          <span className="zep-button__text">SMALL button</span>
        </button>
      </div>
      <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
        <button className="zep-button zep-button-primary zep-button--full">
          <span className="zep-button__text">Full Width button</span>
        </button>
      </div>
      <p>Secondary</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-secondary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
      ))}
      <p>Tertiary</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-tertiary">
            <CopyIcon className="zep-button__icon zep-button__icon--tertiary" />
            <span className="zep-button__text zep-button__text--tertiary">
              Icon button
            </span>
          </button>
        </div>
      ))}
      <p>Icon</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-primary zep-button-icon">
            <Icon icon="zepicons-copy" className="zep-button__icon" />
          </button>
        </div>
      ))}
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-secondary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
      ))}
    </>
  );
}

export default ButtonPage;
