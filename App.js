import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Alert, Platform} from 'react-native';
import {connect} from 'react-redux';
import Navigator from '@src/navigator';
import {colors} from '@src/theme';
import {LocalNotification} from '@src/utils/pushNotification';
import PushNotification from 'react-native-push-notification';
import Geolocation from 'react-native-geolocation-service';
import {getTemperature, getCurrentTemparature} from '@src/store/actions';

const App = ({getTemperature, getCurrentTemparature}) => {
  useEffect(() => {
    //remove previous notification
    PushNotification.removeAllDeliveredNotifications();
    // LocalNotification();
    // Geolocation.requestAuthorization('whenInUse')
    //   .then(res => {
    //     console.log('res', res);
    //     if (res === 'granted') {
    //       Geolocation.getCurrentPosition(
    //         position => {
    //           console.log('position>>>', position);
    //         },
    //         error => {
    //           Alert.alert(`Code ${error.code}`, error.message);
    //           console.log('error', error);
    //         },
    //         {
    //           accuracy: {
    //             android: 'high',
    //             ios: 'best',
    //           },
    //           timeout: 15000,
    //           maximumAge: 10000,
    //           distanceFilter: 0,
    //         },
    //       );
    //     }
    //   })
    //   .catch(e => {
    //     console.log('e', e);
    //   });
    Geolocation.getCurrentPosition(
      position => {
        console.log('position:::', position);
        const {coords} = position;
        console.log('coords::', coords);
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
  }, []);
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.darkGreen}
      />
      <Navigator />
    </>
  );
};
export default connect(null, {getTemperature, getCurrentTemparature})(App);
