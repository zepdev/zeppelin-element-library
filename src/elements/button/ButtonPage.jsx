import React from 'react';
import CopyIcon from '../icon/CopyIcon';
import Icon from '../icon/Icon';

function ButtonPage() {
  const theme = ['indigo', 'yellow', 'red'];
  return (
    <>
      <p className="zep-typo--normal-body1">Primary - Large (anchor tags)</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <a
            href="https://www.zeppelin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="zep-button zep-button-primary"
          >
            <span className="zep-button__text">Zeppelin</span>
          </a>
        </div>
      ))}
      <p className="zep-typo--normal-body1">Primary - Large (button tags)</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-primary">
            <span className="zep-button__text">Primary Button</span>
          </button>
        </div>
      ))}
      <p>Other</p>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <a
          href="https://www.zeppelin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="zep-button zep-button-primary zep-button--small"
        >
          <span className="zep-button__text">SMALL button (anchor tag)</span>
        </a>
      </div>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button className="zep-button zep-button-primary zep-button--small">
          <span className="zep-button__text">SMALL button</span>
        </button>
      </div>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button
          href="https://www.zeppelin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="zep-button zep-button-primary zep-button--full"
        >
          <span className="zep-button__text">
            Full Width button (anchor tag)
          </span>
        </button>
      </div>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button className="zep-button zep-button-primary zep-button--full">
          <span className="zep-button__text">Full Width button</span>
        </button>
      </div>
      <p>Secondary (anchor tags)</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <a
            href="https://www.zeppelin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="zep-button zep-button-secondary"
          >
            <span className="zep-button__text">Zeppelin</span>
          </a>
        </div>
      ))}
      <p>Secondary (button tags)</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <button className="zep-button zep-button-secondary">
            <span className="zep-button__text">Secondary button</span>
          </button>
        </div>
      ))}
      <p>Tertiary (anchor tags)</p>
      {theme.map(elem => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          <a
            href="https://www.zeppelin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="zep-button zep-button-tertiary"
          >
            <CopyIcon className="zep-button__icon zep-button__icon--tertiary" />
            <span className="zep-button__text zep-button__text--tertiary">
              Icon button
            </span>
          </a>
        </div>
      ))}
      <p>Tertiary (button tags)</p>
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
      <p>Disabled</p>
      <div className="theme-indigo">
        <div style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary" disabled>
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <button
            className="zep-button zep-button-primary zep-button--full"
            disabled
          >
            <span className="zep-button__text">Full Width button</span>
          </button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <button
            className="zep-button zep-button-primary zep-button--small"
            disabled
          >
            <span className="zep-button__text">SMALL button</span>
          </button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary" disabled>
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-tertiary" disabled>
            <CopyIcon className="zep-button__icon zep-button__icon--tertiary" />
            <span className="zep-button__text zep-button__text--tertiary">
              Icon button
            </span>
          </button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <button
            className="zep-button zep-button-primary zep-button-icon"
            disabled
          >
            <Icon icon="zepicons-copy" className="zep-button__icon" />
          </button>
        </div>
        <div style={{ marginBottom: 15 }}>
          <button
            className="zep-button zep-button-secondary zep-button-icon"
            disabled
          >
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonPage;
