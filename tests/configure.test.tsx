import React from 'react';

import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import configure from "../src";

configure(Enzyme.ShallowWrapper);

const Component: React.FC<{ test: number }> = ({ test }) => <div/>;
const wrapper = shallow(<Component />).diveTo(Component);

const t = wrapper.props().test;

wrapper.find(Component);


