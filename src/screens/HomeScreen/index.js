import React, {useEffect} from 'react';
import {Box, Text} from '@components';
import {connect} from 'react-redux';
import {getCities} from '@src/store/actions';
import List from './widget/List';
const HomeScreen = ({getCities}) => {
  useEffect(() => {
    getCities();
  }, []);
  return (
    <Box>
      <List />
    </Box>
  );
};
export default connect(null, {getCities})(HomeScreen);
