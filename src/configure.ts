import { ShallowWrapper } from 'enzyme';
import { deepDive } from "./extensions/deepDive";

export default function configure(ShallowWrapper: ShallowWrapper) {
  deepDive(ShallowWrapper);
}
