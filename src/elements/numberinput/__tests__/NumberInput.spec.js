import React from 'react';
import ReactDOM from 'react-dom';
import NumberInputPage from '../NumberInputPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NumberInputPage />, div);
});
