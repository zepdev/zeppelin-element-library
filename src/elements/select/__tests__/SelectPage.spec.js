import React from 'react';
import ReactDOM from 'react-dom';
import SelectPage from '../SelectPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectPage />, div);
});
