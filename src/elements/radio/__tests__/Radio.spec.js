import React from 'react';
import ReactDOM from 'react-dom';
import RadioPage from '../RadioPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadioPage />, div);
});
