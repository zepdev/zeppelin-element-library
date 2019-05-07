import React, { useEffect } from 'react';
import data from './buttonData';
import ZEL from '../../zel';
import CopyIcon from './CopyIcon';

function ButtonPage() {
  useEffect(() => {
    ZEL.getButtons();
  });

  return (
    <div>
      <>
        {Object.keys(data).map((elem, idx) => (
          <span
            dangerouslySetInnerHTML={{ __html: data[elem].js }}
            key={`button${idx}`}
          />
        ))}
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button
            type="button"
            className="zep-button zep-button-primary zep-button-icon"
          >
            <CopyIcon className="zep-iconbutton__icon" />
            <span className="zep-button-icon__text">Icon button</span>
          </button>
        </div>
        <div className="theme-zeppelin" style={{ marginBottom: 15 }}>
          <button
            type="button"
            className="zep-button zep-button-primary zep-iconbutton"
          >
            <CopyIcon className="zep-iconbutton__icon" />
          </button>
        </div>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button
            type="button"
            className="zep-button zep-button-primary zep-button-icon"
          >
            <CopyIcon className="zep-iconbutton__icon" />
            <span className="zep-button-icon__text">Icon button</span>
          </button>
        </div>
        <div className="theme-cat" style={{ marginBottom: 15 }}>
          <button
            type="button"
            className="zep-button zep-button-primary zep-iconbutton"
          >
            <CopyIcon className="zep-iconbutton__icon" />
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button
            type="button"
            className="zep-button zep-button-primary zep-button-icon"
          >
            <CopyIcon className="zep-iconbutton__icon" />
            <span className="zep-button-icon__text">Icon button</span>
          </button>
        </div>
        <div className="theme-rental" style={{ marginBottom: 15 }}>
          <button
            type="button"
            className="zep-button zep-button-primary zep-iconbutton"
          >
            <CopyIcon className="zep-iconbutton__icon" />
          </button>
        </div>
      </>
    </div>
  );
}

export default ButtonPage;
