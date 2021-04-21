import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Alert, Platform} from 'react-native';
import {connect} from 'react-redux';
import Navigator from '@src/navigator';
import {colors} from '@src/theme';
import {LocalNotification} from '@src/utils/pushNotification';
import PushNotification from 'react-native-push-notification';
import Geolocation from 'react-native-geolocation-service';
import {getTemperature, getCurrentTemparature} from '@src/store/actions';
import {Loader} from '@components';

const App = ({getTemperature, getCurrentTemparature, temperature}) => {
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {coords} = position;
        const func = async () => {
          try {
            const params = {
              lat: coords?.latitude,
              lon: coords?.longitude,
            };
            const res = await getTemperature(params);
            if (res) {
              const {value} = res;
              const temp = value?.main;
              const resCurrentTemp = await getCurrentTemparature(temp);
              resCurrentTemp && LocalNotification();
            }
          } catch (e) {
            alert('error while get temperature::', e);
          } finally {
          }
        };
        func();
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },

        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    //remove previous notification
    PushNotification.removeAllDeliveredNotifications();
    // LocalNotification();
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse').then(res => {
        if (res === 'granted') {
          getLocation();
        }
      });
    } else {
      requestPermission();
    }
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.darkGreen}
      />
      {temperature?.loading ? <Loader /> : <Navigator />}
    </>
  );
};
const mapStateToProps = ({app: {temperature}}) => ({temperature});

export default connect(mapStateToProps, {
  getTemperature,
  getCurrentTemparature,
})(App);
