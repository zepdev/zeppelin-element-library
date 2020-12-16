import React from 'react';
import Icon from '../icon/Icon';

function TabsPage() {
  const themes = ['indigo', 'yellow', 'red'];
  const fragments = [
    <>
      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--selected"
          role="tab"
          aria-selected="true"
          aria-controls="panel-1"
          id="big-tab-1"
          tabIndex="0"
        >
          Big Tab 1
        </button>
      </div>
      <div className="zep-tabs__item">
        <button
          className="zep-tab"
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="big-tab-2"
          tabIndex="-1"
        >
          Big Tab 2
        </button>
      </div>
    </>,
    <>
      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--small zep-tab--selected"
          role="tab"
          aria-selected="true"
          aria-controls="panel-1"
          id="small-tab-1"
          tabIndex="0"
        >
          Small Tab 1
        </button>
      </div>

      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--small"
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="snmall-tab-2"
          tabIndex="-1"
        >
          Small Tab 2
        </button>
      </div>
      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--small"
          role="tab"
          aria-selected="false"
          aria-controls="panel-3"
          id="small-tab-3"
          tabIndex="0"
        >
          Small Tab 3
        </button>
      </div>

      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--small"
          role="tab"
          aria-selected="false"
          aria-controls="panel-4"
          id="small-tab-4"
          tabIndex="-1"
        >
          Small Tab 4
        </button>
      </div>
    </>,
    <>
      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--icon zep-tab--selected"
          role="tab"
          aria-selected="true"
          aria-controls="panel-1"
          id="icon-tab-1"
          tabIndex="0"
        >
          <Icon icon="zep-icon-essential-star" className="zep-tab__icon" />
          Icon Tab 1
        </button>
      </div>

      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--icon"
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="icon-tab-2"
          tabIndex="-1"
        >
          <Icon icon="zep-icon-essential-settings" className="zep-tab__icon" />
          Icon Tab 2
        </button>
      </div>

      <div className="zep-tabs__item">
        <button
          className="zep-tab zep-tab--icon"
          role="tab"
          aria-selected="false"
          aria-controls="panel-3"
          id="icon-tab-3"
          tabIndex="-1"
        >
          <Icon icon="zep-icon-essential-info" className="zep-tab__icon" />
          Icon Tab 3
        </button>
      </div>
    </>,
  ];

  const fragmentsList = fragments.map(function (frag, i) {
    return (
      <div key={`tab-list-${i}`} style={{ marginBottom: 30 }}>
        {themes.map((theme) => (
          <div key={`tab-list-${i}-tabs${theme}`} style={{ marginBottom: 15 }}>
            <p className="zep-typo--body-default" style={{ marginBottom: 5 }}>
              Theme {theme}
            </p>
            <div
              className={`theme-${theme} zep-tabs`}
              role="tablist"
              aria-label={`tabs ${theme}`}
            >
              {frag}
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <>
      <p style={{ marginBottom: 15 }} className="zep-typo--headline-3">
        Tabs (every 1st tab shows the selected state)
      </p>
      {fragmentsList}
    </>
  );
}

export default TabsPage;
