import React from 'react';
import ReactDOM from 'react-dom';
import InputPage from '../InputPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputPage />, div);
});
