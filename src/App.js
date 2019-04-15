import React, { useState } from 'react';
import elements from './elements/elements';
import ButtonPage from './elements/button/ButtonPage.jsx';
import TagPage from './elements/tag/TagPage.jsx';
import './base_bundle_entry.scss';
import './icons.font';

function App() {
  const [content, setContent] = useState('welcome');
  return (
    <div>
      <div>
        <div>
          <h1
            style={{
              textAlign: 'center',
              margin: 0,
              padding: 30,
              color: '#ffffff',
              background: '#27166f ',
              width: '100%'
            }}
          >
            Zeppelin Element Library
          </h1>
        </div>
      </div>
      <div className="zep-grid">
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--3">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name}
              </button>
            </div>
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
