import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Navigator from '@src/navigator';
import {colors} from '@src/theme';
import {LocalNotification} from '@src/utils/pushNotification';

const App = () => {
  useEffect(() => {
    LocalNotification();
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
