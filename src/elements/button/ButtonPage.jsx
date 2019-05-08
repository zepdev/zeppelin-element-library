import React from 'react';
import CopyIcon from './CopyIcon';

function ButtonPage() {
  return (
    <div>
      <>
        <p>Primary - Large</p>
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
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
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary">
            <span className="zep-button__text">Normal button</span>
          </button>
        </div>
        <p>Tertiary</p>
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-tertiary">
            <CopyIcon className="zep-button__icon zep-button__icon--tertiary" />
            <span className="zep-button__text zep-button__text--tertiary">
              Icon button
            </span>
          </button>
        </div>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-tertiary">
            <CopyIcon className="zep-button__icon zep-button__icon--tertiary" />
            <span className="zep-button__text zep-button__text--tertiary">
              Icon button
            </span>
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-tertiary">
            <CopyIcon className="zep-button__icon zep-button__icon--tertiary" />
            <span className="zep-button__text zep-button__text--tertiary">
              Icon button
            </span>
          </button>
        </div>
        <p>Icon</p>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-primary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button className="zep-button zep-button-secondary zep-button-icon">
            <CopyIcon className="zep-button__icon" />
          </button>
        </div>
      </>
    </div>
  );
}

export default ButtonPage;
