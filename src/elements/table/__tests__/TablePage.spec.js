import React from 'react';
import ReactDOM from 'react-dom';
import TablePage from '../TablePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TablePage />, div);
});
