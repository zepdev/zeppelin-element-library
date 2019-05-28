import React from 'react';
import ReactDOM from 'react-dom';
import TagPage from '../TagPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TagPage />, div);
});
