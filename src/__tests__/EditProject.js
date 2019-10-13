import React from 'react';
import { shallow } from 'enzyme';
import EditProject from '../components/projects/EditProjectProject';

it('renders without crashing', () => {
    shallow(<EditProject />);
});