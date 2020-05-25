import React from 'react';
import { Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet';

import { theme } from '../utils/constants';

EStyleSheet.build({
  $galleryColor: theme.color.gallery,
  $mineShaftColor: theme.color.mineShaft,
});

const styles = EStyleSheet.create({
  label: {
    color: '$galleryColor',
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
  stripe: {
    paddingTop: hp(1),
    paddingBottom: hp(1),
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
