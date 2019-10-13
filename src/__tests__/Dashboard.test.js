import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../components/layout/Dashboard';

it('renders without crashing', () => {
    shallow(<Dashboard />);
});