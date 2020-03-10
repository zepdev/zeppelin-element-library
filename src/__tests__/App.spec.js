import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the requested content', () => {
  const wrapper = shallow(<App />);
  const buttons = wrapper.find('#main-navigation button');

  expect(buttons).toHaveLength(13);

  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons.at(i);
    btn.simulate('click');
    const prop = wrapper.find('#main-content').prop('data-test-content');
    const btnName = btn
      .text()
      .replace(/\s+/g, '')
      .toLowerCase();
    expect(prop.toLowerCase()).toEqual(btnName);
  }
});
