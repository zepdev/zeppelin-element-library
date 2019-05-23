import React from 'react';
import Icon from '../icon/Icon';

function TabsPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      <p>Big</p>
      {themes.map(elem => (
        <ul
          className={`theme-${elem} zep-tabs`}
          key={`tabs${elem}`}
          role="tablist"
          aria-label={`tabs ${elem}`}
        >
          <li className="zep-tabs__item">
            <button
              className="zep-tab"
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
            >
              Tab 1
            </button>
          </li>
          <li className="zep-tabs__item">
            <button
              className="zep-tab"
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
            >
              Tab 2
            </button>
          </li>
        </ul>
      ))}
      <br />
      <p>Small</p>
      <br />
      {themes.map(elem => (
        <ul
          className={`theme-${elem} zep-tabs`}
          key={`tabs${elem}`}
          role="tablist"
          aria-label={`tabs ${elem}`}
        >
          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--small"
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
            >
              Tab 1
            </button>
          </li>

          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--small"
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
            >
              Tab 2
            </button>
          </li>
          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--small"
              role="tab"
              aria-selected="true"
              aria-controls="panel-3"
              id="tab-3"
              tabIndex="0"
            >
              Tab 3
            </button>
          </li>

          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--small"
              role="tab"
              aria-selected="false"
              aria-controls="panel-4"
              id="tab-4"
              tabIndex="-1"
            >
              Tab 4
            </button>
          </li>
        </ul>
      ))}
      <br />
      <p>With Icon</p>
      <br />
      {themes.map(elem => (
        <ul
          className={`theme-${elem} zep-tabs`}
          key={`tabs${elem}`}
          role="tablist"
          aria-label={`tabs ${elem}`}
        >
          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--icon"
              role="tab"
              aria-selected="true"
              aria-controls="panel-1"
              id="tab-1"
              tabIndex="0"
            >
              <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
              Tab 1
            </button>
          </li>

          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--icon"
              role="tab"
              aria-selected="false"
              aria-controls="panel-2"
              id="tab-2"
              tabIndex="-1"
            >
              <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
              Tab 2
            </button>
          </li>

          <li className="zep-tabs__item">
            <button
              className="zep-tab zep-tab--icon"
              role="tab"
              aria-selected="false"
              aria-controls="panel-3"
              id="tab-3"
              tabIndex="-1"
            >
              <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
              Tab 3
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default TabsPage;
