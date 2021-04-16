import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME_SCREEN, DETAILS_SCREEN} from '@routes';
import {HomeScreen, DetailsScreen} from '@src/screens';
import {colors} from '../theme';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryGreen,
          },
          title: 'WeatherApp',
          headerTitleStyle: {
            color: colors.white,
          },
        }}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={DETAILS_SCREEN} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
