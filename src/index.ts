import { ShallowWrapper } from "enzyme";
import { DeepDive } from "./extensions/deepDive";

declare module "enzyme" {
  interface ShallowWrapper {
    deepDive: DeepDive;
  }
}

export { default } from './configure';


