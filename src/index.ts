declare module "enzyme" {
  interface ShallowWrapper<P = {}> {
    deepDive(dives?: number): ShallowWrapper<P>;
  }
}

export { default } from './configure';


