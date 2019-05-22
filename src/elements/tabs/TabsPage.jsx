import React from 'react';
import Icon from '../icon/Icon';

function TabsPage() {
  const themes = ['zeppelin', 'cat', 'rental'];
  return (
    <>
      <p>Big</p>
      {themes.map(elem => (
        <div className={`theme-${elem} zep-tabs`} key={`tabs${elem}`}>
          <div className="zep-tab">Tab 1</div>
          <div className="zep-tab">Tab 2</div>
        </div>
      ))}
      <p>Small</p>
      {themes.map(elem => (
        <div className={`theme-${elem} zep-tabs`} key={`tabs${elem}`}>
          <div className="zep-tab zep-tab--small">Tab 1</div>
          <div className="zep-tab zep-tab--small">Tab 2</div>
        </div>
      ))}
      <p>With Icon</p>
      {themes.map(elem => (
        <div className={`theme-${elem} zep-tabs`} key={`tabs${elem}`}>
          <div className="zep-tab zep-tab--icon">
            <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
            Tab 1
          </div>
          <div className="zep-tab zep-tab--icon">
            <Icon icon="zepicons-calendar-range" className="zep-tab__icon" />
            Tab 2
          </div>
        </div>
      ))}
    </>
  );
}

export default TabsPage;
