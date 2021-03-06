import React, { useLayoutEffect, useState } from 'react';
import elements from './elements/elements';
import ButtonPage from './elements/button/ButtonPage';
import TagPage from './elements/tag/TagPage';
import CheckboxPage from './elements/checkbox/CheckboxPage';
import InputPage from './elements/input/InputPage';
import NumberInputPage from './elements/numberinput/NumberInputPage';
import ListPage from './elements/list/ListPage';
import RadioPage from './elements/radio/RadioPage';
import TablePage from './elements/table/TablePage';
import SearchPage from './elements/search/SearchPage';
import SelectPage from './elements/select/SelectPage';
import SpinnerPage from './elements/spinner/SpinnerPage';
import TabsPage from './elements/tabs/TabsPage';
import NotificationPage from './elements/notification/NotificationPage';
import PaginationPage from './elements/pagination/PaginationPage';
import TypographyPage from './guidelines/TypographyPage';
import ZEL from './core/zel.js';
import './base_bundle_entry.scss';
import './svgxuse.min.js'; // ie 9 fallback for svg sprites

function App() {
  const [content, setContent] = useState('welcome');

  useLayoutEffect(() => {
    ZEL.refresh();
  });

  return (
    <div>
      <div>
        <div
          style={{
            textAlign: 'center',
            margin: 0,
            padding: 30,
            color: '#ffffff',
            background: '#27166f',
            width: '100%',
          }}
        >
          <h1 className="zep-typo--display-5">Zeppelin Element Library</h1>
        </div>
      </div>
      <div className="zep-grid">
        <div className="zep-grid__row">
          <div
            className="zep-grid__col zep-grid__col--l-2-12  zep-grid__col--m-2-8 zep-grid__col--xs-2-6 zep-grid__col--xxs-2-4"
            style={{ paddingTop: 45 }}
            id="main-navigation"
          >
            {Object.keys(elements).map((elem, i) => (
              <div key={`btn-${i}`}>
                <button
                  className="zep-button zep-button--primary zep-button--full"
                  onClick={() => setContent(elem)}
                  style={{ marginBottom: 4 }}
                >
                  {elements[elem].name}
                </button>
              </div>
            ))}
          </div>
          <div
            id="main-content"
            data-test-content={content}
            className="zep-grid__col zep-grid__col--xs-4-6 zep-grid__col--xxs-2-4"
            style={{
              paddingTop: 45,
              paddingBottom: 75,
            }}
          >
            {content === 'welcome' && (
              <p className="zep-typo--headline-5">
                Welcome to the Zeppelin Element Library
              </p>
            )}
            {content === 'typo' && <TypographyPage />}
            {content === 'button' && <ButtonPage />}
            {content === 'tag' && <TagPage />}
            {content === 'checkbox' && <CheckboxPage />}
            {content === 'input' && <InputPage />}
            {content === 'numberInput' && <NumberInputPage />}
            {content === 'list' && <ListPage />}
            {content === 'radio' && <RadioPage />}
            {content === 'table' && <TablePage />}
            {content === 'search' && <SearchPage />}
            {content === 'select' && <SelectPage />}
            {content === 'spinner' && <SpinnerPage />}
            {content === 'tabs' && <TabsPage />}
            {content === 'notification' && <NotificationPage />}
            {content === 'pagination' && <PaginationPage />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
