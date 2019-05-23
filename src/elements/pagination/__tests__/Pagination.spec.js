import React from 'react';
import ReactDOM from 'react-dom';
import PaginationPage from '../PaginationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaginationPage />, div);
});
