import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
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
          headerTintColor: colors.white,
        }}>
        <Stack.Screen
          options={{
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name={HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
          name={DETAILS_SCREEN}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
