import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OrderMap from '../../components/OrderMap';
import {useRoute} from '@react-navigation/native';
import {onOrderUpdated, onCarUpdated} from './subscriptions';
import {useNavigation} from '@react-navigation/native';

const OrderScreen = (props) => {
  const navigation = useNavigation();
  const [car, setCar] = useState(null);
  const [order, setOrder] = useState(null);

  const route = useRoute();

  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <View style={styles.middleContainer}>
          <Text style={styles.type}>Congratulations</Text>
          <Text style={styles.time}>Your booking successfully confirmed</Text>
        </View>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'black',
            padding: 10,
            margin: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            Goto HomeScreen
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OrderScreen;
