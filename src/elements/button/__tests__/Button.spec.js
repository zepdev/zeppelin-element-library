import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPage from '../ButtonPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonPage />, div);
});
