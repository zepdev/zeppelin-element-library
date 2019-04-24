import React, { useState } from 'react';
import elements from './elements/elements';
import ButtonPage from './elements/button/ButtonPage.jsx';
import TagPage from './elements/tag/TagPage.jsx';
import CheckboxPage from './elements/checkbox/CheckboxPage.jsx';
import InputPage from './elements/input/InputPage.jsx';
import NumberInputPage from './elements/numberinput/NumberInputPage.jsx';
import ListPage from './elements/list/ListPage.jsx';
import './base_bundle_entry.scss';

/* TODO: remove this import, the css itself and the icont font files,
after the files are extracted in a separate repo/npm package */
// import './icons.font';
import './zeppelin-icons.css';

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
            className="zep-grid__col zep-grid__col--3-12 zep-grid__col--xs-1-6 zep-grid__col--xxs-4-4"
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
              // <p>Welcome to the Zeppelin Element Library</p>
              <ListPage />
            )}
            {content === 'button' && <ButtonPage />}
            {content === 'tabs' && <p>This element is not ready</p>}
            {content === 'tag' && <TagPage />}
            {content === 'checkbox' && <CheckboxPage />}
            {content === 'input' && <InputPage />}
            {content === 'numberInput' && <NumberInputPage />}
            {content === 'list' && <ListPage />}
          </div>
        </div>
        <div className="zep-grid__row--cards">
          <div
            className="zep-grid__col--cards zep-grid__col--cards-2-3"
            style={{ paddingTop: 45 }}
          >
            {content === 'welcome' && (
              <p>Welcome to the Zeppelin Element Library</p>
            )}
            {content === 'button' && <ButtonPage />}
            {content === 'tabs' && <p>This element is not ready</p>}
            {content === 'tag' && <TagPage />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
