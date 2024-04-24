import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../dropdown';
import TestRenderer from 'react-test-renderer';


let value = [];
const onChange = (selectedValues) => {
  selectedValues .forEach(element => {
    if (!value.includes(element)) {
      value.push(element);
    }
  });
}

const CommonArgs = {
  value: value,
  onChange: onChange,
  options: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" }
  ],
};

it('renders without crashing', () => {
    const testRenderer = TestRenderer.create(<Dropdown {...CommonArgs} />);
    testRenderer.unmount()
});
  
it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<Dropdown {...CommonArgs} />);
  expect(renderTree).toMatchSnapshot();
});
  