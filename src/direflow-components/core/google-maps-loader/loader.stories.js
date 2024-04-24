import React from "react";
import GoogleMapLoader from "./loader"

export default {
    title: "Design System/Core/GoogleMaps",
    component: GoogleMapLoader,
}

const googleMapAPIKey = 'AIzaSyDJxGtUg3q4Gh52-JO1HBr2xsM2X8MtOYE';

const markers = [
    // { lat: 18.5204, lng: 73.8567, icon :  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"},
    { lat: 18.5314, lng: 73.8446 },
    { lat: 18.5642, lng: 73.7769 },
];
  
const Template = (args) => <GoogleMapLoader {...args} />;
export const Maps = Template.bind({});
Maps.args = {
    mapLocations: markers,
    apiKey: googleMapAPIKey,
    zoom : 11,
    isStreetView: false,
    marker: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    style : {
        width: "100%",
        height: "100vh"
    },
    defaultMapTypeId: "satellite"
};