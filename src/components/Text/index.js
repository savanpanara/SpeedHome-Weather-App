import React from 'react';
import {fonts, fontSizes} from '@src/theme';
import styled from 'styled-components/native';
import {
  textAlign,
  lineHeight,
  fontSize,
  letterSpacing,
  color,
  space,
  marginTop,
  paddingTop,
  paddingBottom,
  flexWrap,
  width,
  marginRight,
  marginLeft,
  fontFamily,
} from 'styled-system';

const Text = styled.Text`
  ${textAlign}
  ${lineHeight}
  ${fontSize}
  ${letterSpacing}
  ${color}
  ${space}
  ${marginTop}
  ${paddingTop}
  ${paddingBottom}
  ${flexWrap}
  ${width}
  ${marginRight}
  ${marginLeft}
  ${fontFamily}
`;

const HeadingText = props => {
  return <Text fontFamily={fonts.bold} {...props} />;
};

const SubHeadingText = props => {
  return <Text fontFamily={fonts.medium} {...props} />;
};

const PlainText = props => (
  <Text
    fontFamily={fonts.regular}
    fontSize={fontSizes[1]}
    letterSpacing={0.3}
    {...props}
  />
);

export {HeadingText, SubHeadingText, PlainText};

export default PlainText;
