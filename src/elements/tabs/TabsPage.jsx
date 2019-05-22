import React from 'react';

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
      {/* <p>Small</p>
      {themes.map(elem => (
         <div className={`theme-${elem} zep-tabs`} key={`tabs${elem}`}>
          <div className="zep-tab">Tab 1</div>
          <div className="zep-tab">Tab 2</div>
        </div>
      ))}
      <p>With Icon</p>
      {themes.map(elem => (
         <div className={`theme-${elem} zep-tabs`} key={`tabs${elem}`}>
          <div className="zep-tab">Tab 1</div>
          <div className="zep-tab">Tab 2</div>
        </div>
      ))} */}
    </>
  );
}

export default TabsPage;
