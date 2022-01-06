import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCzZ7ZOAB2J6QaH2N1G0nAYds4fDfFjF5Y';
// AIzaSyCzZ7ZOAB2J6QaH2N1G0nAYds4fDfFjF5Y
const RouteMap = ({origin, destination}) => {
  console.log('ORGIN IN ROUTE MAP: ', origin, destination);
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: origin.details.geometry.location.lat,
        longitude: origin.details.geometry.location.lng,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="blue"
      />
      {/* <Marker coordinate={origin} title={'Origin'} /> */}
      <Marker coordinate={originLoc} title={'Origin'} />

      {/* <Marker coordinate={destination} title={'Destination'} /> */}
      <Marker coordinate={destinationLoc} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
