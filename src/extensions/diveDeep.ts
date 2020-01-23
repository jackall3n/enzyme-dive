import * as enzyme from 'enzyme';

export function diveDeep(ShallowWrapper: typeof enzyme.ShallowWrapper) {
  ShallowWrapper.prototype.diveDeep = function diveDeep(depth: number = 1) {
    let _this = this;

    for (let d = 0; d < depth; d++) {
      _this = _this.dive();
    }

    return _this;
  }
}
