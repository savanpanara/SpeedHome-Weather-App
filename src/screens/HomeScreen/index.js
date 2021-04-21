import React, {useEffect} from 'react';
import {Box, Loader} from '@components';
import {connect} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {getCities} from '@src/store/actions';
import List from './widget/List';
const HomeScreen = ({getCities, navigation, cities}) => {
  console.log('cities::', cities);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      const func = async () => {
        try {
          getCities();
        } catch (e) {
          alert('error while get cities');
        }
      };
      func();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <>
      {cities?.loading ? (
        <Loader />
      ) : (
        <Box>
          <List navigation={navigation} />
        </Box>
      )}
    </>
  );
};

const mapStateToProps = ({app: {cities}}) => ({cities});

export default connect(mapStateToProps, {getCities})(HomeScreen);
