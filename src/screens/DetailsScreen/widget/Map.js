import React, {useMemo} from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';
import {Box, HeadingText} from '@components';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {ms} from 'react-native-size-matters';
import {ic_location} from '../../../assets/images/index';
import CityWeather from './CityWeather';
import {fontSizes} from '../../../theme';

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
        <Marker coordinate={location} title={city?.name}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={ic_location}
              style={{height: ms(40), width: ms(40), resizeMode: 'contain'}}
            />
            <HeadingText mb={2} fontSize={fontSizes[2]}>
              {city?.name}
            </HeadingText>
          </View>
        </Marker>
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
