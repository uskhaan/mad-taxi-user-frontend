import React, {useState} from 'react';
import {View, Dimensions, Alert} from 'react-native';

import RouteMap from '../../components/RouteMap';
import UberTypes from '../../components/UberTypes';
import Loader from '../../components/Loader';
import {useRoute, useNavigation} from '@react-navigation/native';
import {_axiosPostAPI} from '../../components/Apis';

const SearchResults = (props) => {
  const typeState = useState(null);
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  const {originPlace, destinationPlace} = route.params;

  const onSubmit = async () => {
    // latitude: origin.details.geometry.location.lat,
    // longitude: origin.details.geometry.location.lng,
    console.log(
      'OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO origin place is: ',
      originPlace,
    );
    console.log(
      'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL destination place is: ',
      destinationPlace,
    );

    const from = {
      lat: originPlace.details.geometry.location.lat,
      lng: originPlace.details.geometry.location.lng,
      address: originPlace.data.description,
    };
    const to = {
      lat: destinationPlace.details.geometry.location.lat,
      lng: destinationPlace.details.geometry.location.lng,
      address: destinationPlace.data.description,
    };
    console.log('Data to send From: ', from);
    console.log('Data to send TOOOOOOOOOOOOOOOOO: ', to);
    await _axiosPostAPI('api/taxi/bookings/add', {from, to})
      .then(async (response) => {
        setLoading(false);
        // alert(JSON.stringify(response))
        props.navigation.navigate('Router');
      })
      .catch((err) => {
        setLoading(false);
        alert(JSON.stringify(err));
      });
    const [type] = typeState;
    if (!type) {
      return;
    }

    // submit to server
    try {
      navigation.navigate('OrderPage');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <UberTypes typeState={typeState} onSubmit={onSubmit} />
      </View>
      <Loader loading={loading} />
    </View>
  );
};

export default SearchResults;
