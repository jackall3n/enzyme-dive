import * as enzyme from 'enzyme';

import { diveDeep } from "./extensions/diveDeep";
import { diveTo } from "./extensions/diveTo";

export default function configure(ShallowWrapper: typeof enzyme.ShallowWrapper) {
  diveDeep(ShallowWrapper);
  diveTo(ShallowWrapper);
}
