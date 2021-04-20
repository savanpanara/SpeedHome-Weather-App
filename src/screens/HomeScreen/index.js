import React, {useEffect, useState} from 'react';
import {Box, Text} from '@components';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getCities} from '@src/store/actions';
import List from './widget/List';
import {colors} from '../../theme';
const HomeScreen = ({getCities, navigation}) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const func = async () => {
      try {
        getCities();
      } catch (e) {
        alert('error while get cities');
      } finally {
        setLoading(false);
      }
    };
    func();
  }, []);

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
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <List navigation={navigation} />
        </Box>
      )}
    </>
  );
};
export default connect(null, {getCities})(HomeScreen);
