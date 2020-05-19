import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { theme } from '../utils/constants';

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.codGray,
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
