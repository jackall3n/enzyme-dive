import * as enzyme from 'enzyme';

import { deepDive } from "./extensions/deepDive";

export default function configure(ShallowWrapper: typeof enzyme.ShallowWrapper) {
  deepDive(ShallowWrapper);
}
