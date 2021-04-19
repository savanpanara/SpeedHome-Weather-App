import React from 'react';
import {Box, HeadingText, PlainText, Image} from '@components';
import {vs, ms} from 'react-native-size-matters';
import {colors, fontSizes} from '../../../theme';
const IMAGE_URL = code => `https://openweathermap.org/img/wn/${code}@4x.png`;
const CityWeather = ({city}) => {
  const {main, weather, wind, name} = city;
  return (
    <Box
      flexDirection={'row'}
      p={3}
      justifyContent={'space-between'}
      backgroundColor={colors.white}>
      <Box>
        <HeadingText mb={2} fontSize={fontSizes[3]}>
          {name}
        </HeadingText>
        <PlainText mb={1}>{weather[0]?.main}</PlainText>
        <PlainText mb={1}>{`Humidity: ${main.humidity}`}</PlainText>
        <PlainText mb={1}>{`Wind Speed: ${wind.speed}`}</PlainText>
        <PlainText mb={1}>{`Max. Temp: ${main.temp_max}`}</PlainText>
        <PlainText mb={1}>{`Min. Temp: ${main.temp_min}`}</PlainText>
      </Box>
      <Box alignItems={'center'} justifyContent={'center'}>
        <PlainText fontSize={fontSizes[5]}>
          {`${main.temp}°`}
          <PlainText fontSize={fontSizes[3]}>{'C'}</PlainText>
        </PlainText>
        <Image
          height={ms(120)}
          width={ms(200)}
          source={{uri: IMAGE_URL(weather[0]?.icon)}}
        />
      </Box>
    </Box>
  );
};

export default CityWeather;
