import React from 'react';
import renderer from 'react-test-renderer';
import AutoComplete from '../autocomplete';
import TestRenderer from 'react-test-renderer';

let value;
const onChange = (selectedValues) => {
      value=selectedValues
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
    // const div = document.createElement('div');
    // createRoot(<AutoComplete {...CommonArgs} />, div);
    // ReactDOM.unmountComponentAtNode(div);

    const testRenderer = TestRenderer.create(<AutoComplete {...CommonArgs} />);
    testRenderer.unmount()
});
  
it('matches snapshot as expected', () => {
  const renderTree = renderer.create(<AutoComplete {...CommonArgs} />);
  expect(renderTree).toMatchSnapshot();
});
  