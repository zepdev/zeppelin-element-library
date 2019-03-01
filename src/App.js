import React, { useState } from 'react';
import elements from './elements/elements';
import Button from './elements/button/Button';
import './guidelines/_variables.scss';
import './guidelines/_utils.scss';
import './guidelines/_colors.scss';
import './guidelines/_globals.scss';
import './guidelines/_import_once.scss';
import './guidelines/_typography.scss';
import './App.css';

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
          {Object.keys(elements).map(elem => (
            <button
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
          {content === 'button' && <Button />}
          {content === 'tabs' && <p>This element is not ready</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
