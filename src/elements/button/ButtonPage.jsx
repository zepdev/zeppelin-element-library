import React from 'react';
import Icon from '../icon/Icon';

function ButtonPage() {
  const themes = ['none', 'indigo', 'yellow', 'red', 'blue'];
  const sizes = ['', 'medium', 'small'];
  const types = ['primary', 'secondary'];
  return (
    <>
      {types.map((type) => (
        <div key={type} style={{ marginBottom: 50 }}>
          <p style={{ marginBottom: 15 }} className="zep-typo--headline-3">
            {type.toUpperCase()}
          </p>
          <p className="zep-typo--headline-5" style={{ marginBottom: 15 }}>
            {type.toUpperCase()} (anchor tags)
          </p>
          {themes.map((theme) => (
            <div
              className={`theme-${theme}`}
              style={{ marginBottom: 15 }}
              key={theme}
            >
              <p
                className="zep-typo--display-default"
                style={{ marginBottom: 5 }}
              >
                Theme {theme}
              </p>
              {sizes.map((size) => (
                <a
                  href="https://www.zeppelin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`zep-button zep-button--${type} zep-button--${size}`}
                  style={{ margin: 4 }}
                  key={size}
                >
                  {type}
                </a>
              ))}
            </div>
          ))}
          <div style={{ marginBottom: 15 }}>
            <p
              className="zep-typo--display-default"
              style={{ marginBottom: 10 }}
            >
              disabled
            </p>
            {sizes.map((size2) => (
              <a
                href="https://www.zeppelin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`zep-button zep-button--${type} zep-button--${size2} zep-button-${type}--disabled`}
                style={{ margin: 4 }}
                key={size2}
              >
                {type}
              </a>
            ))}
          </div>
          <p className="zep-typo--headline-5" style={{ marginBottom: 15 }}>
            {type.toUpperCase()} (button tags)
          </p>
          {themes.map((theme2) => (
            <div
              className={`theme-${theme2}`}
              style={{ marginBottom: 15 }}
              key={theme2}
            >
              <p
                className="zep-typo--display-default"
                style={{ marginBottom: 5 }}
              >
                Theme {theme2}
              </p>
              {sizes.map((size3) => (
                <button
                  className={`zep-button zep-button--${type} zep-button--${size3}`}
                  style={{ margin: 4 }}
                  key={size3}
                >
                  {type}
                </button>
              ))}
            </div>
          ))}
          <div style={{ marginBottom: 15 }}>
            <p
              className="zep-typo--display-default"
              style={{ marginBottom: 10 }}
            >
              disabled
            </p>
            {sizes.map((size4) => (
              <button
                className={`zep-button zep-button--${type} zep-button--${size4}`}
                style={{ margin: 4 }}
                key={size4}
                disabled
              >
                {type}
              </button>
            ))}
          </div>
          <p className="zep-typo--headline-5" style={{ marginBottom: 15 }}>
            {type.toUpperCase()} full width
          </p>
          <div className="theme-indigo" style={{ marginBottom: 15 }}>
            <button
              href="https://www.zeppelin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`zep-button zep-button--${type} zep-button--full`}
            >
              Full Width button (anchor tag)
            </button>
          </div>
          <div className="theme-indigo" style={{ marginBottom: 15 }}>
            <button
              className={`zep-button zep-button--${type} zep-button--full`}
            >
              Full Width
            </button>
          </div>
          <p style={{ marginBottom: 15 }} className="zep-typo--headline-5">
            Icon {type.toUpperCase()}
          </p>
          {themes.map((theme3) => (
            <div
              className={`theme-${theme3}`}
              style={{ marginBottom: 15 }}
              key={theme3}
            >
              <p
                className="zep-typo--display-default"
                style={{ marginBottom: 5 }}
              >
                Theme {theme3}
              </p>
              <button
                className={`zep-button zep-button--${type} zep-button-icon`}
              >
                <Icon icon="zepicons-copy" className="zep-button__icon" />
              </button>
            </div>
          ))}
          <p className="zep-typo--display-default" style={{ marginBottom: 10 }}>
            disabled
          </p>
          <div style={{ marginBottom: 15 }}>
            <button
              className={`zep-button zep-button--${type} zep-button-icon`}
              disabled
            >
              <Icon icon="zepicons-copy" className="zep-button__icon" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ButtonPage;
