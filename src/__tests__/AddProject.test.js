import React from 'react';
import { shallow } from 'enzyme';
import AddProject from '../components/projects/AddProject';

it('renders without crashing', () => {
    shallow(<AddProject />);
});