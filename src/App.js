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
        <div className="zep-grid__col zep-grid__col--1">
          <button className="zel-button zel-button-primary">test 1</button>
        </div>
        <div className="zep-grid__col zep-grid__col--2">
          <button className="zel-button zel-button-primary">test 2</button>
        </div>
        <div className="zep-grid__col zep-grid__col--3">
          <button className="zel-button zel-button-primary">test 3</button>
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--1">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 1
              </button>
            </div>
          ))}
        </div>

        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--2">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 2
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--3">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 3
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--4">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 4
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--5">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 5
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--6">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 6
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--7">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 7
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--8">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 8
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--9">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 9
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--10">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 10
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--11">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 11
              </button>
            </div>
          ))}
        </div>
        <div className="zep-grid__row">
          {Object.keys(elements).map((elem, i) => (
            <div key={`btn-${i}`} className="zep-grid__col zep-grid__col--12">
              <button
                className="zel-button zel-button-primary"
                onClick={() => setContent(elements[elem].name)}
              >
                {elements[elem].name} 12
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
