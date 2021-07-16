import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

it('Renders App', () => {
  shallow(<App />);
});

it("Should have header and footer", () => {
  const wrapper = shallow(<App/>);
  const footer = wrapper.find(Footer);
  const header = wrapper.find(Header);
  expect(footer.exists()).toBe(true);
  expect(header.exists()).toBe(true);
})
