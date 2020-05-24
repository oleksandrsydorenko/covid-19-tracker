import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from '../utils/constants';

EStyleSheet.build({
  $codGrayColor: theme.color.codGray,
});

const styles = EStyleSheet.create({
  spinner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '$codGrayColor',
    justifyContent: 'center',
  },
});

const Indicator = () => (
  <ActivityIndicator size={50} color={theme.color.casablanca} />
);

export const Spinner = ({ isFullScreen }) =>
  isFullScreen ? (
    <View style={styles.spinner}>
      <Indicator />
    </View>
  ) : (
    <Indicator />
  );

export default Spinner;
