import React from 'react';
import ReactDOM from 'react-dom';
import ButtonPage from '../ButtonPage.jsx';
import Button from '../button';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonPage />, div);
});

it('button handles click', () => {
  const div = document.createElement('button');
  const btn = new Button(div, 'testbutton');

  const clickHandler = jest.spyOn(btn, 'clickHandler');

  const clickEvent = new Event('click');
  btn.html.dispatchEvent(clickEvent);

  expect(clickHandler).toBeCalled();
});
