import React from 'react';

import * as Enzyme from 'enzyme';
import configure from "../src";
import { shallow } from "enzyme";

configure(Enzyme.ShallowWrapper);

const Component: React.FC = () => null;
const wrapper = shallow(<Component/>)
