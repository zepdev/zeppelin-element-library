import React from 'react';
import ReactDOM from 'react-dom';
import NumberInputPage from '../NumberInputPage.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NumberInputPage />, div);
});
