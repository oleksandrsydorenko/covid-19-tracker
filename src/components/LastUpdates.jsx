import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Report } from '../components';

const styles = EStyleSheet.create({
  updates: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

const LastUpdates = ({ stats, time }) => (
  <View style={styles.updates}>
    <Report
      data={[
        [stats.total, stats.recovered],
        [stats.active, stats.deaths],
      ]}
      time={time}
    />
  </View>
);

export default LastUpdates;
