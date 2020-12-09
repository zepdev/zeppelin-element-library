import React from 'react';
import CopyIcon from '../icon/CopyIcon';
import Icon from '../icon/Icon';

function ButtonPage() {
  const theme = ['indigo', 'yellow', 'red', 'blue'];
  const sizes = ['', 'medium', 'small'];
  return (
    <>
      <p style={{ marginBottom: 15 }} className="zep-typo--headline-3">
        Primary
      </p>
      <p className="zep-typo--headline-5" style={{ marginBottom: 15 }}>
        Primary (anchor tags)
      </p>
      {theme.map((elem) => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          {sizes.map((elem2) => (
            <a
              href="https://www.zeppelin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`zep-button-primary zep-button--${elem2}`}
              style={{ margin: 4 }}
              key={elem2}
            >
              Primary
            </a>
          ))}
        </div>
      ))}
      <div style={{ marginBottom: 15 }}>
        {sizes.map((elem2) => (
          <a
            href="https://www.zeppelin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`zep-button-primary zep-button--${elem2} zep-button-primary--disabled`}
            style={{ margin: 4 }}
            key={elem2}
          >
            Primary
          </a>
        ))}
      </div>
      <p className="zep-typo--headline-5">Primary (button tags)</p>
      {theme.map((elem) => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          {sizes.map((elem2) => (
            <button
              className={`zep-button-primary zep-button--${elem2}`}
              style={{ margin: 4 }}
              key={elem2}
            >
              Primary
            </button>
          ))}
        </div>
      ))}
      <div style={{ marginBottom: 15 }}>
        {sizes.map((elem2) => (
          <button
            className={`zep-button-primary zep-button--${elem2}`}
            style={{ margin: 4 }}
            key={elem2}
            disabled
          >
            Primary
          </button>
        ))}
      </div>
      <p className="zep-typo--headline-5" style={{ marginBottom: 15 }}>
        Primary full width
      </p>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button
          href="https://www.zeppelin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="zep-button-primary zep-button--full"
        >
          Full Width button (anchor tag)
        </button>
      </div>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button className="zep-button-primary zep-button--full">
          Full Width
        </button>
      </div>
      <p
        style={{ marginBottom: 15, marginTop: 50 }}
        className="zep-typo--headline-3"
      >
        Secondary
      </p>
      <p style={{ marginBottom: 15 }} className="zep-typo--headline-5">
        Secondary (anchor tags)
      </p>
      {theme.map((elem) => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          {sizes.map((elem2) => (
            <a
              href="https://www.zeppelin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`zep-button-secondary zep-button--${elem2}`}
              style={{ margin: 4 }}
              key={elem2}
            >
              Secondary
            </a>
          ))}
        </div>
      ))}
      <div style={{ marginBottom: 15 }}>
        {sizes.map((elem2) => (
          <a
            href="https://www.zeppelin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`zep-button-secondary zep-button--${elem2} zep-button-secondary--disabled`}
            style={{ margin: 4 }}
            key={elem2}
          >
            Secondary
          </a>
        ))}
      </div>
      <p className="zep-typo--headline-5">Secondary (button tags)</p>
      {theme.map((elem) => (
        <div
          className={`theme-${elem}`}
          style={{ marginBottom: 15 }}
          key={elem}
        >
          {sizes.map((elem2) => (
            <button
              className={`zep-button-secondary zep-button--${elem2}`}
              style={{ margin: 4 }}
              key={elem2}
            >
              Secondary
            </button>
          ))}
        </div>
      ))}
      <div style={{ marginBottom: 15 }}>
        {sizes.map((elem2) => (
          <button
            className={`zep-button-secondary zep-button--${elem2}`}
            style={{ margin: 4 }}
            key={elem2}
            disabled
          >
            Secondary
          </button>
        ))}
      </div>
      <p className="zep-typo--headline-5">Secondary full width</p>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button
          href="https://www.zeppelin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="zep-button-secondary zep-button--full"
        >
          Full Width button (anchor tag)
        </button>
      </div>
      <div className="theme-indigo" style={{ marginBottom: 15 }}>
        <button className="zep-button-secondary zep-button--full">
          Full Width
        </button>
      </div>
      <p
        style={{ marginBottom: 15, marginTop: 50 }}
        className="zep-typo--headline-3"
      >
        Icon
      </p>
      {theme.map((elem) => (
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
      {theme.map((elem) => (
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
