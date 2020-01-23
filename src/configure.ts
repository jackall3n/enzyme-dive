import * as enzyme from 'enzyme';

import { deepDive } from "./extensions/deepDive";
import { diveTo } from "./extensions/diveTo";

export default function configure(ShallowWrapper: typeof enzyme.ShallowWrapper) {
  deepDive(ShallowWrapper);
  diveTo(ShallowWrapper);
}
