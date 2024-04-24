import React from 'react';
import GoogleMaps from '../googlemaps';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';

const GoogleMapsArgs = {
    type: 'string',
    apiKey: 'AIzaSyDJxGtUg3q4Gh52-JO1HBr2xsM2X8MtOYE',
    isClearable: 'true',
    value: '',
    mailingImgPath: 'images/mailing-add.png',
    garagingImgPath: 'images/pin-address.png',
    LocationTypes: [
      "Mailing Address",
      "Primary Garaging Address",
      "Garaging Address"
    ]
  };


  it('renders without crashing', () => {
    const testRenderer = TestRenderer.create(<GoogleMaps {...GoogleMapsArgs} />);
    testRenderer.unmount()
  });
  it('matches snapshot as expected', () => {
    const renderTree = renderer.create(<GoogleMaps {...GoogleMapsArgs} />);
    expect(renderTree).toMatchSnapshot();
  });