import React from 'react';
import ReactDOM from 'react-dom';
import NotificationPage from '../NotificationPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotificationPage />, div);
});
