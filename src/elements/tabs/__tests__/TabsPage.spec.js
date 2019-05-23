import React from 'react';
import ReactDOM from 'react-dom';
import TabsPage from '../TabsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabsPage />, div);
});
