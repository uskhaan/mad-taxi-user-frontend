import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

// import cars from '../../assets/data/cars';

const HomeMap = (props) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {}, []);

  const getImage = (type) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-UberXL.png');
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 31.4027,
        longitude: 74.2126,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {/* {cars.map((car) => ( */}
      <Marker
        key="123"
        // coordinate={{latitude: car.latitude, longitude: car.longitude}}>
        coordinate={{latitude: 31.4027, longitude: 74.2126}}>
        <Image
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
          }}
          // source={getImage(car.type)}
          source="../../assets/images/top-UberX.png"
        />
      </Marker>
      {/* ))} */}
    </MapView>
  );
};

export default HomeMap;
