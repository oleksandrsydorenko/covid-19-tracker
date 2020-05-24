import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from '../utils/constants';

EStyleSheet.build({
  $codGrayColor: theme.color.codGray,
});

const styles = EStyleSheet.create({
  layout: {
    height: '100%',
    backgroundColor: '$codGrayColor',
  },
});

const Layout = ({ children }) => <View style={styles.layout}>{children}</View>;

export default Layout;
