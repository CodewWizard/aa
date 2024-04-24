import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import ReactStreetview from "react-streetview";

export default function GoogleMapsLoader(props) {
  const { defaultMapTypeId = "roadmap" } = props;
  const [mapLocations, setMapLocations] = useState(props.mapLocations); // take array
  const [isStreetView, setIsStreetView] = useState(props.isStreetView);
  const [streetViewPosition, setStreetViewPosition] = useState(
    props.mapLocations[0] || { lat: 33.885332, lng: -84.460784 }
  );

  const Marker = (mprops) => (
    <div onClick={mprops.onClick}>
      <img src={props.marker} alt="Marker" />
    </div>
  );

  const handleApiLoaded = (map) => {
    console.log(map);
  };

  useEffect(() => {
    setMapLocations(props.mapLocations);
    setIsStreetView(props.isStreetView);
  }, [props.mapLocations, props.isStreetView]);

  return (
    <div className="Map" style={props.style ? { ...props.style } : { height: "100vh", width: "100%" }}>
      {isStreetView ? (
        <ReactStreetview
          apiKey={props.apiKey}
          streetViewPanoramaOptions={{ position: streetViewPosition }}
        />
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: props.apiKey }}
          defaultCenter={{
            lat: mapLocations[0]?.lat || 33.88546955250436,
            lng: mapLocations[0]?.lng || -84.4613015397852,
          }}
          defaultZoom={props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          options={{
            panControl: false,
            mapTypeControl: true,
            scrollwheel: true,
            streetViewControl: true,
            mapTypeControlOptions: {
              mapTypeIds: ["roadmap", "terrain", "satellite", "hybrid"],
            },
            mapTypeId: defaultMapTypeId
          }}
        >
          {mapLocations?.length &&
            mapLocations.map((item) => {
              return (
                <Marker
                  lat={item.lat}
                  lng={item.lng}
                />
              );
            })}
        </GoogleMapReact>
      )}
    </div>
  );
}
