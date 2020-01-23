import { ShallowWrapper } from 'enzyme';

export interface DeepDive {
  (dives?: number): ShallowWrapper;
}

export function deepDive(ShallowWrapper: ShallowWrapper) {
  (ShallowWrapper as any).prototype.deepDive = function deepDive(dives: number = 1) {
    let _this = this;

    for (let d = 0; d < dives; d++) {
      _this = _this.dive();
    }

    return _this;
  }
}
