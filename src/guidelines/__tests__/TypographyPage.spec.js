import React from 'react';
import ReactDOM from 'react-dom';
import TypographyPage from '../TypographyPage.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TypographyPage />, div);
});
