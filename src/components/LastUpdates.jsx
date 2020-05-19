import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Report } from '../components';

const styles = StyleSheet.create({
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
