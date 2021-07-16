import React from 'react';
import { shallow } from 'enzyme';
// shallow render the components but not all sub components

import Footer from './Footer';



it('Should render footer', () => {
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const result = span.text();

    expect(result).toBe("Unite Testing Demo for components");
});