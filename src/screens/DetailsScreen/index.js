import React from 'react';
import {Box, Text} from '@components';
import {SafeAreaView} from 'react-native';
import Map from './widget/Map';
import {colors} from '../../theme';

const DetailsScreen = ({route}) => {
  const {city} = route.params;
  console.log('selected city', city);
  return (
    <Box backgroundColor={colors.white} as={SafeAreaView}>
      <Map city={city} />
    </Box>
  );
};

export default DetailsScreen;
