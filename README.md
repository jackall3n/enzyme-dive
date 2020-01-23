🏊🏼‍♂ Dive deep️

## Installation

#### 1. Add Package
```typescript
yarn add enzyme-dive --dev
```

#### 2. Extend Ezyme in your setup file
```typescript
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-xx';
import configure from "enzyme-dive";

Enzyme.configure({ adapter: new Adapter() });

// The magic 🧙🏼‍♂️
configure(Enzyme.ShallowWrapper);
```

## Usage

```typescript
import React from 'react';
import { shallow } from "enzyme";
import Component from './Component';

describe('<Component />', function() {
  it("should render", () => {
      // const wrapper = shallow(<Component />).dive().dive().dive().dive().dive();
      const wrapper = shallow(<Component />).deepDive(5);

      expect(wrapper).toMatchSnapshot();
  });
});


```
