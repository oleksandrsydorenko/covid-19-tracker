import React from 'react';
import { StyleSheet, View } from 'react-native';

import { theme } from '../utils/constants';

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.color.codGray,
  },
});

const Layout = ({ children }) => <View style={styles.layout}>{children}</View>;

export default Layout;
