import React from 'react';
import ReactDOM from 'react-dom';
import SpinnerPage from '../SpinnerPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SpinnerPage />, div);
});
