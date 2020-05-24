import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from '../utils/constants';

EStyleSheet.build({
  $galleryColor: theme.color.gallery,
  $mineShaftColor: theme.color.mineShaft,
});

const styles = EStyleSheet.create({
  label: {
    color: '$galleryColor',
    fontSize: 16,
  },
  stripe: {
    marginBottom: 35,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '$mineShaftColor',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const Stripe = ({ label }) => (
  <View style={styles.stripe}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

Stripe.defaultProps = {
  label: '',
};

export default Stripe;
