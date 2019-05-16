import React from 'react';
import ReactDOM from 'react-dom';
import CopyIcon from '../CopyIcon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CopyIcon />, div);
});
