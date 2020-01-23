import * as enzyme from 'enzyme';
import {
  ComponentClass,
  ComponentType,
  EnzymePropSelector,
  HTMLAttributes,
  ShallowWrapper,
  StatelessComponent
} from 'enzyme';
import { Component } from 'react';

export function diveTo(ShallowWrapper: typeof enzyme.ShallowWrapper) {
  function diveTo<P2>(statelessComponent: StatelessComponent<P2>, maxDepth?: number): enzyme.ShallowWrapper<P2, never>;
  function diveTo<P2>(component: ComponentType<P2>, maxDepth?: number): enzyme.ShallowWrapper<P2, any>;
  function diveTo<C2 extends Component>(componentClass: ComponentClass<C2['props']>, maxDepth?: number): enzyme.ShallowWrapper<C2['props'], C2['state'], C2>;
  function diveTo(props: EnzymePropSelector, maxDepth?: number): enzyme.ShallowWrapper<any, any>;
  function diveTo(selector: string, maxDepth?: number): enzyme.ShallowWrapper<HTMLAttributes, any>;
  function diveTo(this: ShallowWrapper, selector: any, maxDepth: number = 20) {
    let _this = this;

    let depth = 0;

    while (!_this.is(selector) && depth < maxDepth) {
      _this = _this.dive();
      depth++;
    }

    return _this;
  }

  ShallowWrapper.prototype.diveTo = diveTo;
}
