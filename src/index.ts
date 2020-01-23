import { ComponentClass, ComponentType, EnzymePropSelector, HTMLAttributes, StatelessComponent } from "enzyme";
import { Component } from "react";

declare module "enzyme" {
  interface ShallowWrapper<P = {}> {
    deepDive(dives?: number): ShallowWrapper<P>;

    diveTo<P2>(statelessComponent: StatelessComponent<P2>, maxDepth?: number): ShallowWrapper<P2, never>;
    diveTo<P2>(component: ComponentType<P2>, maxDepth?: number): ShallowWrapper<P2, any>;
    diveTo<C2 extends Component>(componentClass: ComponentClass<C2['props']>, maxDepth?: number): ShallowWrapper<C2['props'], C2['state'], C2>;
    diveTo(props: EnzymePropSelector, maxDepth?: number): ShallowWrapper<any, any>;
    diveTo(selector: string, maxDepth?: number): ShallowWrapper<HTMLAttributes, any>;
  }
}

export { default } from './configure';


