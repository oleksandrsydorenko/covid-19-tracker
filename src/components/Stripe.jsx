import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../utils/constants';

const styles = StyleSheet.create({
  label: {
    color: theme.color.gallery,
    fontSize: 16,
  },
  stripe: {
    marginBottom: 35,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: theme.color.mineShaft,
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
