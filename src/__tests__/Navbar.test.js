import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../components/layout/NavBar';

it('renders without crashing', () => {
    shallow(<Navbar />);
});