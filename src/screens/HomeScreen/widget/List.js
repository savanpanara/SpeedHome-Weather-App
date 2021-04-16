import React from 'react';
import {ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import {Box, PlainText, Image} from '@components';
import {connect} from 'react-redux';
import {colors, fontSizes} from '../../../theme';
import {width} from 'styled-system';
const List = ({cities}) => {
  const Divider = () => <Box height={0.5} backgroundColor={colors.lightGray} />;
  return (
    <Box backgroundColor={colors.white} as={SafeAreaView}>
      <ScrollView>
        {cities?.list.map((city, key) => {
          return (
            <Box key={`${key}`}>
              <TouchableOpacity style={{padding: 10}}>
                <Box flexDirection={'row'} justifyContent={'space-between'}>
                  <Box>
                    <PlainText fontSize={fontSizes[3]} lineHeight={22}>
                      {city.name}
                    </PlainText>
                    <PlainText mt={10}>{`${city.weather[0]?.main}`}</PlainText>
                  </Box>
                  <Box justifyContent={'center'}>
                    <PlainText lineHeight={32} fontSize={fontSizes[6]} mt={10}>
                      {`${city.main.temp}°`}
                      <PlainText fontSize={fontSizes[4]}>{'C'}</PlainText>
                    </PlainText>
                  </Box>
                </Box>
              </TouchableOpacity>
              <Divider />
            </Box>
          );
        })}
      </ScrollView>
    </Box>
  );
};

const mapStateToProps = ({app: {cities}}) => ({cities});
export default connect(mapStateToProps, {})(List);
