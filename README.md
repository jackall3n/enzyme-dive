🏊🏼‍♂ Dive deep️

## Installation

#### 1. Add Package
```typescript
yarn add enzyme-dive --dev
```

#### 2. Extend Enzyme in your setup file
```typescript
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-xx';
import configure from "enzyme-dive";

Enzyme.configure({ adapter: new Adapter() });

// The magic 🧙🏼‍♂️
configure(Enzyme.ShallowWrapper);
```

## Usage

### diveTo(selector)
Use this to dive until you reach your component. This can be useful if you've got many HoC wrappers.
```typescript
import React from 'react';
import { shallow } from "enzyme";
import Component from './Component';
import ChildComponent from './ChildComponent';

describe('<Component />', function() {
  it("should render child", () => {
      const wrapper = shallow(<Component />).diveTo(ChildComponent);

      expect(wrapper).toMatchSnapshot();
  });
});
```
---
### diveDeep(depth)
Dive through your nodes a specified amount 
```typescript
import React from 'react';
import { shallow } from "enzyme";
import Component from './Component';

describe('<Component />', function() {
  it("should render", () => {
      // const wrapper = shallow(<Component />).dive().dive().dive().dive().dive();
      const wrapper = shallow(<Component />).diveDeep(5);

      expect(wrapper).toMatchSnapshot();
  });
});
```
