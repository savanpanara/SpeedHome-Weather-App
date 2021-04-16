import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '@src/navigator';
import {colors} from '@src/theme';
const App = () => {
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
