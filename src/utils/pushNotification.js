import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';
import store from '../store/index';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
});
PushNotification.createChannel(
  {
    channelId: 'com.speedHome',
    channelName: 'speedHome',
    channelDescription: 'A channel to categorise your notifications',
    playSound: true,
    soundName: 'default',
    importance: 4,
    vibrate: true,
  },
  created => console.log(`createChannel returned '${created}'`),
);
export const LocalNotification = () => {
  const getStoreData = store?.getState()?.app;
  const temp = getStoreData?.currentTemp?.temp;
  PushNotification.localNotification({
    autoCancel: true,
    channelId: 'com.speedHome',
    title: 'WeatherApp',
    message: `Current Temperature: ${temp}°c`,
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    ongoing: true,
  });
};
