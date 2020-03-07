import { mount } from 'enzyme';
import React from 'react';
import App from '../App';

describe('App', () => {
  test('Renders a form', () => {
    const wrapper = mount(<App />);
    expect(wrapper.exists('form')).toBe(true);
  });
});
