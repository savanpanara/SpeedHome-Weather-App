import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Alert} from 'react-native';
import Navigator from '@src/navigator';
import {colors} from '@src/theme';
import {LocalNotification} from '@src/utils/pushNotification';
import PushNotification from 'react-native-push-notification';
import Geolocation from 'react-native-geolocation-service';

const App = () => {
  useEffect(() => {
    //remove previous notification
    PushNotification.removeAllDeliveredNotifications();
    LocalNotification();
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
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

export default App;
