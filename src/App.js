import React, { useState } from 'react';
import elements from './elements/elements';
import ButtonPage from './elements/button/ButtonPage.jsx';
import './base_bundle_entry.scss';

function App() {
  const [content, setContent] = useState('welcome');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h1
        style={{
          textAlign: 'center',
          margin: 0,
          padding: 30,
          color: '#ffffff',
          background: '#27166f '
        }}
      >
        Zeppelin Element Library
      </h1>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <div
          style={{
            borderRight: '1px solid black',
            flexBasis: '25%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: 30
          }}
        >
          {Object.keys(elements).map((elem, i) => (
            <button
              key={`btn-${i}`}
              className="zel-button"
              onClick={() => setContent(elements[elem].name)}
            >
              {elements[elem].name}
            </button>
          ))}
        </div>
        <div style={{ flexGrow: 1, padding: 30 }}>
          {content === 'welcome' && (
            <p>Welcome to the Zeppelin Element Library</p>
          )}
          {content === 'button' && <ButtonPage />}
          {content === 'tabs' && <p>This element is not ready</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
