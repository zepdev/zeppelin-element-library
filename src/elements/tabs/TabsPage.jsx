import React from 'react';
import Icon from '../icon/Icon';

function TabsPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      <p>Big</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem} zep-tabs`}
          key={`tabs${elem}`}
          role="tablist"
          aria-label={`tabs ${elem}`}
        >
          <button
            className="zep-tab"
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
          >
            Tab 1
          </button>
          <button
            className="zep-tab"
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
          >
            Tab 2
          </button>
        </div>
      ))}
      <p>Small</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem} zep-tabs`}
          key={`tabs${elem}`}
          role="tablist"
          aria-label={`tabs ${elem}`}
        >
          <div
            className="zep-tab zep-tab--small"
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
          >
            Tab 1
          </div>
          <div
            className="zep-tab zep-tab--small"
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
          >
            Tab 2
          </div>
        </div>
      ))}
      <p>With Icon</p>
      {themes.map(elem => (
        <div
          className={`theme-${elem} zep-tabs`}
          key={`tabs${elem}`}
          role="tablist"
          aria-label={`tabs ${elem}`}
        >
          <div
            className="zep-tab zep-tab--icon"
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
          >
            <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
            Tab 1
          </div>
          <div
            className="zep-tab zep-tab--icon"
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
          >
            <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
            Tab 2
          </div>
        </div>
      ))}
    </>
  );
}

export default TabsPage;
