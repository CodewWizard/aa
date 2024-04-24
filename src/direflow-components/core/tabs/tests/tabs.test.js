import React from 'react';
import renderer from 'react-test-renderer';
import TabsGroup from '../tabs'
import TestRenderer from 'react-test-renderer';

const AlertArgs = {
  type: "alert",
  size: "md",
  successLabel: "OK",
  header: "Alert!",
  showModal: true,
  message: "Are you sure?",
  onSuccess:() => {},
  onClose: () => {}
}

it('renders without crashing', () => {
    const testRenderer = TestRenderer.create(<TabsGroup {...AlertArgs} />);
    testRenderer.unmount()
  });

  it('matches snapshot as expected', () => {
    const renderTree = renderer.create(<TabsGroup {...AlertArgs} />);
    expect(renderTree).toMatchSnapshot();
  });