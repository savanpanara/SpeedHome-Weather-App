import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../theme';
import {Box} from '@components';
const Loader = () => {
  return (
    <Box
      backgroundColor={colors.white}
      justifyContent={'center'}
      flex={1}
      alignItems={'center'}>
      <ActivityIndicator size="large" color={colors.black} />
    </Box>
  );
};
export default Loader;
