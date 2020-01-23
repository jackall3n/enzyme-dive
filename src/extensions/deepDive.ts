import * as enzyme from 'enzyme';

export function deepDive(ShallowWrapper: typeof enzyme.ShallowWrapper) {
  ShallowWrapper.prototype.deepDive = function deepDive(dives: number = 1) {
    let _this = this;

    for (let d = 0; d < dives; d++) {
      _this = _this.dive();
    }

    return _this;
  }
}
