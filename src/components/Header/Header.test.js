import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('Should increment the count', () => {
const wrapper = shallow(<Header/>);
const total = wrapper.find('h3.total').text();
expect(total).toBe('0');

const button = wrapper.find('button');
button.simulate('click');
// button.simulate('click');
//to check multiple clickes add multiple simulate and increase toBe count according

const total1 = wrapper.find('h3.total').text();
expect(total1).toBe('1');
});


it("Should have title", () =>{
    const wrapper = shallow(<Header name={'Header'}/>);
    const title = wrapper.find('h3.title').text();
    expect(title).toBe('Header');
      
})