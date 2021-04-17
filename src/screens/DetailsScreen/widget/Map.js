import React, {useMemo} from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import {Box, Text} from '@components';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {vs} from 'react-native-size-matters';
import CityWeather from './CityWeather';
const Map = ({city}) => {
  const {height} = useWindowDimensions();
  const location = useMemo(() => {
    const {coord} = city;
    return {
      latitude: coord.lat,
      longitude: coord.lon,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    };
  }, [city]);
  return (
    <Box
      justifyContent={'flex-end'}
      // as={SafeAreaView}
      height={'100%'}
      width={'100%'}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={location}>
        <Marker coordinate={location} />
      </MapView>
      <CityWeather city={city} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Map;
