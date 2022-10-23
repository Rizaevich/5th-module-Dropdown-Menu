import { shallow } from 'enzyme';
import * as React from 'react';
var enzyme = require('enzyme');


import { Dropdown } from '../Dropdown';

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = enzyme.shallow(<Dropdown children={<div/>} button={<button/>} />)
        expect(wrapper).toBeDefined();
        expect(wrapper.find('#button')).toBeDefined();
    })
})
