import React, { useState } from 'react';
import elements from './elements/elements';
import ButtonPage from './elements/button/ButtonPage.jsx';
import TagPage from './elements/tag/TagPage.jsx';
import './base_bundle_entry.scss';
import './icons.font';

function App() {
  const [content, setContent] = useState('welcome');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            flexBasis: '10%',
            height: 1000,
            display: 'flex',
            flexDirection: 'column',
            padding: 45,
            alignItems: 'flex-start'
          }}
        >
          {Object.keys(elements).map((elem, i) => (
            <button
              key={`btn-${i}`}
              className="zep-button"
              onClick={() => setContent(elements[elem].name)}
            >
              {elements[elem].name}
            </button>
          ))}
        </div>
        <div style={{ flexGrow: 1, padding: 45 }}>
          {content === 'welcome' && (
            <p>Welcome to the Zeppelin Element Library</p>
          )}
          {content === 'button' && <ButtonPage />}
          {content === 'tabs' && <p>This element is not ready</p>}
          {content === 'tag' && <TagPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
