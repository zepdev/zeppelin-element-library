import React, { useState } from 'react';
import elements from './elements/elements';
import ButtonPage from './elements/button/ButtonPage.jsx';
import TagPage from './elements/tag/TagPage.jsx';
import InputPage from './elements/input/InputPage.jsx';
import NumberInputPage from './elements/numberinput/NumberInputPage.jsx';
import './base_bundle_entry.scss';
// import './icons.font';
/* TODO: remove this import, the css itself and the icont font files,
after the files are extracted in a separate repo/npm package */
import './zeppelin-element-library.css';

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
          <div
            className="zep-grid__col zep-grid__col--3-12"
            style={{ paddingTop: 45 }}
          >
            {Object.keys(elements).map((elem, i) => (
              <div key={`btn-${i}`}>
                <button
                  className="zep-button zep-button-primary zep-button--full"
                  onClick={() => setContent(elements[elem].name)}
                >
                  <span className="zep-button__text">
                    {elements[elem].name}
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div
            className="zep-grid__col zep-grid__col--9-12"
            style={{ paddingTop: 45 }}
          >
            {content === 'welcome' && (
              <p>Welcome to the Zeppelin Element Library</p>
            )}
            {content === 'button' && <ButtonPage />}
            {content === 'tabs' && <p>This element is not ready</p>}
            {content === 'tag' && <TagPage />}
            {content === 'input' && <InputPage />}
            {content === 'numberInput' && <NumberInputPage />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
