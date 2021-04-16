import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from '@src/navigator';
import {colors} from '@src/theme';
import {Provider} from 'react-redux';
import store from '@src/store';
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.darkGreen}
      />
      <Navigator />
    </Provider>
  );
};

export default App;
